import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { getAuth, signInAnonymously, User } from "firebase/auth";

interface ImageUploaderProps {
  onImagesUploaded: (urls: string[]) => void;
  maxFiles?: number;
  className?: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesUploaded, maxFiles = 3, className = "" }) => {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [currentFileIndex, setCurrentFileIndex] = useState<number>(0);

  const validateFile = (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`File ${file.name} is too large. Maximum size is 5MB`);
    }

    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      throw new Error(`File ${file.name} has unsupported format. Supported formats are: JPEG, PNG, GIF, WEBP`);
    }
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  const uploadFile = async (file: File, index: number, totalFiles: number): Promise<string> => {
    try {
      setError(null);
      setIsUploading(true);

      // First ensure we have an authenticated user
      const auth = getAuth();
      if (!auth.currentUser) {
        console.log("No user found, authenticating anonymously...");
        await signInAnonymously(auth);
        const user = auth.currentUser as User | null;
        console.log("Anonymous authentication successful:", user?.uid || "anonymous");
      }

      // Create a unique filename with timestamp and random string
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 8);
      const safeFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
      const uniqueFilename = `${timestamp}-${randomString}-${safeFileName}`;
      const filePath = `article-images/${uniqueFilename}`;

      console.log("Starting upload process:", {
        path: filePath,
        size: file.size,
        type: file.type,
        auth: auth.currentUser?.uid,
      });

      // Create a reference to the file location
      const storageRef = ref(storage, filePath);

      try {
        // Create upload task
        const uploadTask = uploadBytesResumable(storageRef, file, {
          contentType: file.type,
          customMetadata: {
            uploadedBy: auth.currentUser?.uid || "anonymous",
            uploadedAt: new Date().toISOString(),
            originalName: file.name,
          },
        });

        // Return a promise that resolves with the download URL
        return new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Handle progress
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
              console.log("Upload is " + progress + "% done");
            },
            (error) => {
              // Handle error
              console.error("Upload error:", error);
              reject(error);
            },
            async () => {
              // Handle success
              try {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log("File available at", downloadURL);
                resolve(downloadURL);
              } catch (error) {
                console.error("Error getting download URL:", error);
                reject(error);
              }
            }
          );
        });
      } catch (uploadError: any) {
        console.error("Upload error details:", {
          code: uploadError.code,
          message: uploadError.message,
          serverResponse: uploadError.serverResponse,
          name: uploadError.name,
        });

        if (uploadError.message?.includes("CORS")) {
          throw new Error(`Upload failed. Please try again in a few moments. If the issue persists, try a smaller image or a different file name.`);
        }
        throw uploadError;
      }
    } catch (error: any) {
      console.error("Error in uploadFile:", error);
      setError(error.message);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsUploading(true);
      setError(null);
      setUploadProgress(0);
      setCurrentFileIndex(0);

      try {
        // Validate all files first
        acceptedFiles.forEach(validateFile);

        // Upload files sequentially
        const urls: string[] = [];
        for (let i = 0; i < acceptedFiles.length; i++) {
          setCurrentFileIndex(i + 1);
          const url = await uploadFile(acceptedFiles[i], i, acceptedFiles.length);
          urls.push(url);
        }

        setUploadedUrls((prev) => [...prev, ...urls]);
        onImagesUploaded(urls);
        setUploadProgress(100);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Error uploading images. Please try again.";
        setError(errorMessage);
        setUploadProgress(0);
      } finally {
        setIsUploading(false);
        setCurrentFileIndex(0);
      }
    },
    [onImagesUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    maxFiles: maxFiles - uploadedUrls.length,
    maxSize: MAX_FILE_SIZE,
    disabled: uploadedUrls.length >= maxFiles || isUploading,
  });

  const removeImage = (index: number) => {
    const newUrls = uploadedUrls.filter((_, i) => i !== index);
    setUploadedUrls(newUrls);
    onImagesUploaded(newUrls);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600"}
          ${uploadedUrls.length >= maxFiles || isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Uploading file {currentFileIndex} of {maxFiles}
              </p>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{Math.round(uploadProgress)}%</span>
            </div>
            <div className="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${uploadProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">Please don't close this window while upload is in progress</p>
          </div>
        ) : uploadedUrls.length >= maxFiles ? (
          <p className="text-gray-600 dark:text-gray-400">Maximum number of images reached</p>
        ) : (
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              {isDragActive ? "Drop the images here..." : `Drag and drop images here, or click to select files (${uploadedUrls.length}/${maxFiles})`}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Supported formats: JPEG, JPG, PNG, GIF, WEBP (Max size: 5MB)</p>
          </div>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-400 rounded-md">
          <p className="font-medium">Error uploading images</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}

      {uploadedUrls.length > 0 && (
        <div className={`grid gap-4 ${uploadedUrls.length === 1 ? "grid-cols-1" : uploadedUrls.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {uploadedUrls.map((url, index) => (
            <div key={url} className="relative group">
              <img
                src={url}
                alt={`Uploaded image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  console.error("Error loading image:", {
                    url,
                    error: e,
                  });
                  setError("Error loading one or more images. Please try uploading again.");
                }}
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

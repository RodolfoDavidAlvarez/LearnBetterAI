import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { authService } from "../../services/authService";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  readTime: string;
  thumbnail: string;
  createdAt: string;
  status: "draft" | "published";
}

const AdminDashboard: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const articlesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[];
      setArticles(articlesData);
    } catch (err) {
      setError("Error fetching articles");
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate("/admin/login");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Admin Navigation */}
            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Admin Navigation</h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/admin"
                  className="w-full px-4 py-3 text-left text-gray-700 dark:text-gray-200 rounded-md transition-colors hover:bg-blue-50 dark:hover:bg-gray-600 font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500"
                >
                  Dashboard Overview
                </Link>
                <Link
                  to="/admin/articles"
                  className="w-full px-4 py-3 text-left text-gray-700 dark:text-gray-200 rounded-md transition-colors hover:bg-blue-50 dark:hover:bg-gray-600 font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500"
                >
                  Manage Articles
                </Link>
                <Link
                  to="/admin/new-article"
                  className="w-full px-4 py-3 text-left text-gray-700 dark:text-gray-200 rounded-md transition-colors hover:bg-blue-50 dark:hover:bg-gray-600 font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500"
                >
                  Create New Article
                </Link>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                <Routes>
                  <Route index element={<AdminOverview articles={articles} />} />
                  <Route path="articles" element={<ArticlesManagement articles={articles} onUpdate={fetchArticles} />} />
                  <Route path="new-article" element={<ArticleEditor onSave={fetchArticles} />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminOverview: React.FC<{ articles: Article[] }> = ({ articles }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200">Total Articles</h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{articles.length}</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-green-800 dark:text-green-200">Published</h3>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{articles.filter((article) => article.status === "published").length}</p>
      </div>
      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">Drafts</h3>
        <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{articles.filter((article) => article.status === "draft").length}</p>
      </div>
    </div>
  </div>
);

const ArticlesManagement: React.FC<{ articles: Article[]; onUpdate: () => void }> = ({ articles, onUpdate }) => {
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "articles", id));
        onUpdate();
      } catch (err) {
        console.error("Error deleting article:", err);
      }
    }
  };

  const handleStatusChange = async (id: string, newStatus: "draft" | "published") => {
    try {
      await updateDoc(doc(db, "articles", id), { status: newStatus });
      onUpdate();
    } catch (err) {
      console.error("Error updating article status:", err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Manage Articles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{article.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{article.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      article.status === "published"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                  <button
                    onClick={() => handleStatusChange(article.id, article.status === "published" ? "draft" : "published")}
                    className={`${
                      article.status === "published"
                        ? "text-yellow-600 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-300"
                        : "text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
                    } transition-colors`}
                  >
                    {article.status === "published" ? "Unpublish" : "Publish"}
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ArticleEditor: React.FC<{ onSave: () => void }> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!title.trim() || !content.trim() || !category.trim() || !readTime.trim()) {
        throw new Error("Please fill in all required fields");
      }

      await addDoc(collection(db, "articles"), {
        title: title.trim(),
        content: content.trim(),
        category: category.trim(),
        readTime: readTime.trim(),
        thumbnail: thumbnail.trim(),
        status: status,
        createdAt: new Date().toISOString(),
      });

      // Reset form
      setTitle("");
      setContent("");
      setCategory("");
      setReadTime("");
      setThumbnail("");
      setStatus("draft");
      onSave();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error creating article");
      console.error("Error creating article:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Article</h2>
        <button
          onClick={() => setPreview(!preview)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {preview ? "Edit" : "Preview"}
        </button>
      </div>

      {error && <div className="mb-4 p-4 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md">{error}</div>}

      {preview ? (
        <div className="prose dark:prose-invert max-w-none">
          <h1>{title || "Untitled Article"}</h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{readTime || "0"} min read</span>
            <span className="mx-2">•</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
              {category || "Uncategorized"}
            </span>
          </div>
          <div className="mt-6">{content || "No content yet"}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Read Time (minutes) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="1"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Thumbnail URL</label>
            <input
              type="url"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setContent("");
                setCategory("");
                setReadTime("");
                setThumbnail("");
                setStatus("draft");
              }}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Clear Form
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Save Article"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminDashboard;

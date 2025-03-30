import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

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

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    if (!id) {
      navigate("/learn");
      return;
    }

    try {
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const articleData = { id: docSnap.id, ...docSnap.data() } as Article;
        if (articleData.status !== "published") {
          throw new Error("Article is not published");
        }
        setArticle(articleData);
      } else {
        throw new Error("Article not found");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching article");
      console.error("Error fetching article:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-600 dark:text-gray-300">Loading article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-4">
        <div className="text-xl text-red-600 dark:text-red-400">{error || "Article not found"}</div>
        <Link to="/learn" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Return to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link
          to="/learn"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime} min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
        </header>

        {/* Article Thumbnail */}
        {article.thumbnail && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img src={article.thumbnail} alt={article.title} className="w-full h-[400px] object-cover" />
          </div>
        )}

        {/* Article Content */}
        <article
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-600 dark:prose-p:text-gray-300
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-ul:list-disc prose-ol:list-decimal
            prose-img:rounded-xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
};

export default ArticleView;

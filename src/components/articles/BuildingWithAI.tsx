import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Link } from "react-router-dom";

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

// Helper function to strip HTML tags and get plain text
const stripHtml = (html: string) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").trim();
};

// Helper function to truncate text with ellipsis
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export const BuildingWithAI: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const articlesRef = collection(db, "articles");
      const q = query(articlesRef, where("status", "==", "published"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-xl text-gray-600 dark:text-gray-300">Loading articles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-red-600 dark:text-red-300">{error}</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-gray-600 dark:text-gray-300">No articles found</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn AI Development</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Explore our collection of articles and tutorials about AI-powered web development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
          >
            {article.thumbnail && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex flex-col flex-grow p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime} min read</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {article.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{truncateText(stripHtml(article.content), 150)}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(article.createdAt).toLocaleDateString()}</span>
                <span className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                  Read More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

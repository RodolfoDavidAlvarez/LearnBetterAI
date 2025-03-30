import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
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

const AILearningHub: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const q = query(collection(db, "articles"), where("status", "==", "published"), orderBy("createdAt", "desc"));
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
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI Website Building Hub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover how AI is revolutionizing website development and learn to build better websites with artificial intelligence.
          </p>
        </div>

        {/* Featured Article */}
        {articles.length > 0 && (
          <div className="mb-12">
            <Link to={`/article/${articles[0].id}`} className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Thumbnail */}
                  <div className="relative h-64 md:h-full">
                    <img src={articles[0].thumbnail} alt={articles[0].title} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
                        {articles[0].category}
                      </span>
                      <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">{articles[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{articles[0].title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{articles[0].content}</p>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link key={article.id} to={`/article/${article.id}`} className="block">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 text-xs font-medium text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
                        {article.category}
                      </span>
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{article.content}</p>
                    <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Read More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILearningHub;

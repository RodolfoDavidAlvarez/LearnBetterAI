import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy, Firestore } from "firebase/firestore";
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

const LearnAI: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError("");

        const articlesRef = collection(db, "articles");
        const q = query(
          articlesRef,
          where("status", "==", "published")
          // Temporarily removing orderBy until index is built
          // orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);
        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Article[];

        setArticles(articlesData);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err instanceof Error ? `Error: ${err.message}` : "Failed to load articles. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center min-h-[400px]">
            <div className="text-red-600 dark:text-red-400 text-center">
              <p className="text-xl font-semibold mb-4">😕 {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn AI Development</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of articles and tutorials about AI-powered web development
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {article.thumbnail && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{article.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(article.createdAt).toLocaleDateString()}</span>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">Read More →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnAI;

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as dotenv from "dotenv";

dotenv.config();

// Initialize Firebase Admin
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}");
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// Sample test articles
const testArticles = [
  {
    title: "Getting Started with AI Development",
    content: `Artificial Intelligence is revolutionizing the way we build software. In this comprehensive guide, we'll explore the fundamentals of AI development and how to get started.

Key topics covered:
- Understanding AI basics
- Setting up your development environment
- First steps in AI programming
- Best practices and common pitfalls

Whether you're a beginner or an experienced developer, this guide will help you navigate the world of AI development.`,
    category: "AI Development",
    readTime: "5",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "published",
  },
  {
    title: "The Future of Web Development with AI",
    content: `As AI continues to evolve, it's reshaping the landscape of web development. Let's explore how AI is changing the way we build and maintain websites.

Topics covered:
- AI-powered development tools
- Automated testing and debugging
- Smart code generation
- Performance optimization

The future is here, and it's powered by artificial intelligence.`,
    category: "Web Development",
    readTime: "7",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2425&q=80",
    status: "published",
  },
  {
    title: "Machine Learning in Practice",
    content: `Machine learning is more than just a buzzword - it's a powerful tool that's transforming industries. Learn how to implement machine learning in your projects.

What you'll learn:
- Basic machine learning concepts
- Popular ML frameworks
- Real-world applications
- Getting started with ML projects

Take your development skills to the next level with machine learning.`,
    category: "Machine Learning",
    readTime: "6",
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "draft",
  },
];

async function sendWebhook(article: any) {
  const webhookData = {
    ...article,
    type: "new_article",
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch("https://hook.us1.make.com/j65k30pgwmjtbcipgqr99ny5qr7bmxkd", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(webhookData),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed with status ${response.status}`);
    }

    console.log("Webhook notification sent successfully");
  } catch (error) {
    console.error("Error sending webhook:", error);
  }
}

async function simulateTestData() {
  console.log("Starting test data simulation...");

  for (const article of testArticles) {
    try {
      // Add timestamp to article
      const articleWithTimestamp = {
        ...article,
        createdAt: new Date().toISOString(),
      };

      // Add to Firestore
      const docRef = await db.collection("articles").add(articleWithTimestamp);
      console.log(`Article "${article.title}" added to Firestore with ID: ${docRef.id}`);

      // If article is published, send webhook notification
      if (article.status === "published") {
        await sendWebhook({ ...articleWithTimestamp, id: docRef.id });
      }

      // Add a small delay between articles to simulate real-world usage
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error processing article "${article.title}":`, error);
    }
  }

  console.log("Test data simulation completed!");
}

// Run the simulation
simulateTestData().catch(console.error);

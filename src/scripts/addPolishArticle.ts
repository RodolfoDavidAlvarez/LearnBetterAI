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

const polishArticle = {
  title: "Budowanie Stron Internetowych z Wykorzystaniem Sztucznej Inteligencji",
  content: `W dzisiejszym świecie tworzenie stron internetowych stało się znacznie prostsze dzięki sztucznej inteligencji. W tym artykule przyjrzymy się, jak AI rewolucjonizuje proces tworzenia stron internetowych.

1. Wprowadzenie do AI w Tworzeniu Stron
Sztuczna inteligencja zmienia sposób, w jaki projektujemy i budujemy strony internetowe. Od generowania kodu po projektowanie interfejsu użytkownika, AI oferuje potężne narzędzia, które mogą przyspieszyć i uprościć proces tworzenia stron.

2. Główne Zastosowania AI w Tworzeniu Stron
- Generowanie kodu HTML i CSS
- Projektowanie interfejsu użytkownika
- Optymalizacja SEO
- Personalizacja treści
- Automatyczne testowanie

3. Popularne Narzędzia AI do Tworzenia Stron
- ChatGPT do generowania treści
- Midjourney do tworzenia grafik
- GitHub Copilot do programowania
- Wix ADI do automatycznego projektowania

4. Korzyści z Wykorzystania AI
- Szybszy czas tworzenia
- Niższe koszty
- Spójność w projektowaniu
- Lepsze doświadczenie użytkownika

5. Najlepsze Praktyki
- Zawsze weryfikuj generowany kod
- Używaj AI jako narzędzia wspomagającego
- Zachowaj kreatywność człowieka
- Regularnie aktualizuj narzędzia AI

6. Przyszłość AI w Tworzeniu Stron
Sztuczna inteligencja będzie odgrywać coraz większą rolę w tworzeniu stron internetowych. Oczekuje się, że w przyszłości AI będzie mogło:
- Tworzyć kompleksowe strony od podstaw
- Automatycznie optymalizować wydajność
- Dostosowywać się do preferencji użytkowników
- Generować unikalne treści

7. Wnioski
Wykorzystanie AI w tworzeniu stron internetowych to nie tylko trend, ale przyszłość branży. Dzięki odpowiedniemu wykorzystaniu tych narzędzi, możemy tworzyć lepsze, bardziej efektywne i bardziej dostępne strony internetowe.`,
  category: "AI Development",
  readTime: "8",
  thumbnail:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  createdAt: new Date().toISOString(),
  status: "published",
};

async function addArticle() {
  try {
    const docRef = await db.collection("articles").add(polishArticle);
    console.log("Article added successfully with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding article:", error);
  }
}

addArticle();

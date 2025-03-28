import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Showcase />
          <RegisterForm />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

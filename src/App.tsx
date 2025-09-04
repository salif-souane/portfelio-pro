import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    
    <Router>
      <h1 className="text-4xl text-blue-600">Hello Tailwind 🚀</h1>

      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar fixe */}
        <Navbar />

        {/* Contenu principal */}
        <main className="flex-grow container mx-auto px-4 pt-20 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

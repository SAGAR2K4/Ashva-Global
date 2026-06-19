import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Hero from "./components/Hero";
import ProductRangeHero from "./components/ProductRangeHero";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function Home() {
  return (
    <>
      <Hero />
      <About/>
      <ProductRangeHero />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
        
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
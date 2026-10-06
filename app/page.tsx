import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeBand from "./components/MarqueeBand";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-blue-800 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* 1. Landing / Hero Section */}
      <HeroSection />

      {/* Disciplines ticker */}
      <MarqueeBand />

      {/* 2. About Us Section */}
      <AboutSection />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Gallery Section */}
      <GallerySection />

      {/* 5. Contact Us Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

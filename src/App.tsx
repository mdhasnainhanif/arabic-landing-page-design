import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { CoursesSection } from "./components/CoursesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Set document direction to RTL for Arabic
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";

    // Load Cairo font from Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Apply Cairo font to body with smooth scrolling
    document.body.style.fontFamily = "'Cairo', sans-serif";
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden antialiased">
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <WhyChooseUs />
        <HowItWorks />
        <CoursesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "عنا", href: "#about" },
  { label: "الدورات", href: "#courses" },
  { label: "الشهادات", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: "blur(20px)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`${
          isScrolled
            ? "bg-white/95 border-b border-gray-200 shadow-lg shadow-gray-500/10"
            : "bg-white/70 border-b border-gray-200/50"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all">
                  <span className="text-white text-xl">د</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
              <span className="text-2xl text-gray-900">دليلك</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                تسجيل الدخول
              </Button>
              <Button className="group relative bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all overflow-hidden">
                <span className="relative z-10">سجل الآن</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden py-6 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <nav className="flex flex-col gap-2 mb-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-right py-3 px-4 rounded-xl hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full bg-gray-100 border-gray-200 text-gray-900"
                >
                  تسجيل الدخول
                </Button>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                  سجل الآن
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.header>
  );
}

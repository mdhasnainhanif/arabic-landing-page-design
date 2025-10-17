import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

const navigationLinks = [
  {
    title: "الصفحات",
    links: ["الرئيسية", "عنا", "الدورات", "المدونة"],
  },
  {
    title: "البرامج",
    links: ["برامج المبتدئين", "برامج المتقدمين", "التدريب الخاص", "ورش العمل"],
  },
  {
    title: "الدعم",
    links: ["مركز المساعدة", "الأسئلة الشائعة", "تواصل معنا", "سياسة الخصوصية"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-orange-50/30 border-t border-gray-200">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">د</span>
                </div>
                <span className="text-2xl text-gray-900">دليلك</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
              منصتك الأولى لتطوير مهارات التحدث أمام الجمهور والتواصل الفعّال. نساعدك على بناء الثقة وتحقيق النجاح.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-gray-900 mb-4">اشترك في النشرة البريدية</h4>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-xl transition-all shadow-lg">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-orange-600" />
                </div>
                <span>info@dalilk.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-left" dir="ltr">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          {navigationLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-900 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-600 transition-colors inline-block group"
                    >
                      <span className="flex items-center gap-2">
                        {link}
                        <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-600 text-center md:text-right">
              © 2025 دليلك. جميع الحقوق محفوظة.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group w-12 h-12 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-orange-600 hover:to-amber-600 border border-gray-200 hover:border-transparent flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Legal links */}
            <div className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-orange-600 transition-colors">
                الشروط والأحكام
              </a>
              <span>•</span>
              <a href="#" className="hover:text-orange-600 transition-colors">
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent" />
    </footer>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { ArrowLeft, Play, Sparkles, TrendingUp } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-amber-50/30 to-yellow-100/40" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-orange-200/30 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-yellow-200/25 rounded-full blur-[100px]"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-right space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-orange-200/50 shadow-lg shadow-orange-500/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-gray-800">أكثر من 5000 متدرب نشط</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-6 leading-[1.1]">
                <span className="block text-gray-900">
                  ابدأ رحلتك
                </span>
                <span className="block bg-gradient-to-l from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  في التحدث بثقة
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              اكتشف قوة التواصل الفعّال وطوّر مهاراتك في الإلقاء والتحدث أمام الجمهور مع برامجنا التدريبية المتخصصة
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 px-8 py-6 text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ابدأ الآن
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group bg-white hover:bg-orange-50 border-orange-300 hover:border-orange-400 text-gray-900 backdrop-blur-xl px-8 py-6 text-lg shadow-lg"
              >
                <Play className="w-5 h-5 ml-2 text-orange-600" />
                شاهد العرض
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-center lg:justify-end gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-center lg:text-right">
                <div className="text-3xl text-gray-900 mb-1">+5000</div>
                <div className="text-sm text-gray-600">متدرب</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center lg:text-right">
                <div className="text-3xl text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">رضا العملاء</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center lg:text-right flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-3xl text-gray-900 mb-1">+150</div>
                  <div className="text-sm text-gray-600">دورة</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative lg:order-2 order-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y }}
          >
            {/* Floating cards */}
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-orange-200/50 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwc3RhZ2UlMjBjb25maWRlbnR8ZW58MXx8fHwxNzYwNjM4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Speaker"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="bg-white/90 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-right">
                        <div className="text-gray-900">+5000 متدرب</div>
                        <div className="text-gray-600">انضموا إلينا</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-4 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900">جلسة مباشرة</div>
                    <div className="text-gray-600 text-sm">الآن</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl border border-orange-200/50 rounded-2xl p-4 shadow-xl"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl text-gray-900 mb-1">4.9</div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-amber-500">★</div>
                    ))}
                  </div>
                  <div className="text-gray-600 text-sm">تقييم المتدربين</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-orange-400 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-orange-600"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

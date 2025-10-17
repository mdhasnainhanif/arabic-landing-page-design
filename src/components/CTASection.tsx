import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowLeft, Sparkles, Zap, TrendingUp } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"
          animate={{
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white">انضم إلى آلاف المتدربين الناجحين</span>
            </motion.div>

            {/* Main headline */}
            <h2 className="text-5xl lg:text-7xl text-white mb-8 leading-tight">
              رحلتك تبدأ بخطوة
              <br />
              <span className="bg-gradient-to-l from-white via-orange-100 to-white bg-clip-text text-transparent">
                اتخذها الآن
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              لا تدع الخوف يقف في طريقك. ابدأ اليوم واكتشف قدراتك الحقيقية في التحدث والتأثير
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="group relative bg-white text-orange-600 hover:bg-white/90 shadow-2xl hover:shadow-white/30 transition-all duration-300 px-10 py-7 text-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ابدأ اليوم مجاناً
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 text-white backdrop-blur-xl px-10 py-7 text-xl"
              >
                تصفح البرامج
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Zap className="w-10 h-10 text-white mx-auto mb-4" />
                <div className="text-3xl text-white mb-2">نتائج سريعة</div>
                <div className="text-white/80">تحسن ملحوظ في أسابيع</div>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="w-10 h-10 text-white mx-auto mb-4" />
                <div className="text-3xl text-white mb-2">98%</div>
                <div className="text-white/80">نسبة رضا المتدربين</div>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-10 h-10 text-white mx-auto mb-4" />
                <div className="text-3xl text-white mb-2">+5000</div>
                <div className="text-white/80">متدرب نشط حالياً</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

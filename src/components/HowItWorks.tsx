import { motion } from "motion/react";
import { UserPlus, BookOpen, Trophy, ArrowLeft } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "سجّل حسابك",
    description: "إنشاء حساب مجاني والوصول إلى جميع البرامج التدريبية المتاحة في دقائق معدودة",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "اختر برنامجك",
    description: "استعرض الدورات واختر البرنامج المناسب لمستواك وأهدافك من بين أكثر من 150 برنامج",
  },
  {
    number: "03",
    icon: Trophy,
    title: "ابدأ التعلم",
    description: "تفاعل مع المحتوى، طبّق المهارات، واحصل على شهادتك المعتمدة من مدربين عالميين",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-200/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-rose-100 border border-rose-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-700">رحلتك تبدأ هنا</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            كيف تبدأ
            <span className="block bg-gradient-to-l from-rose-600 to-orange-600 bg-clip-text text-transparent">
              في 3 خطوات بسيطة
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection line - vertical on mobile, horizontal on desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-px">
              <div className="h-full bg-gradient-to-l from-orange-300 via-amber-300 to-orange-300" />
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Card */}
                    <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all group shadow-lg hover:shadow-xl">
                      {/* Number badge */}
                      <div className="absolute -top-6 right-8 w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 rotate-6 group-hover:rotate-12 transition-transform">
                        <span className="text-white text-xl">{step.number}</span>
                      </div>

                      {/* Icon container */}
                      <div className="relative mb-8 mt-4">
                        <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 group-hover:scale-110 transition-transform">
                          <Icon className="w-10 h-10 text-orange-600" />
                        </div>
                        <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl text-gray-900 mb-4 text-right">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-right leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Arrow indicator */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:flex absolute top-24 -left-4 w-8 h-8 bg-white backdrop-blur-xl border border-gray-200 rounded-full flex items-center justify-center">
                          <ArrowLeft className="w-4 h-4 text-orange-600" />
                        </div>
                      )}
                    </div>

                    {/* Connection dot */}
                    <div className="hidden lg:block absolute top-24 right-1/2 translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-orange-50 z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-full transition-all shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50">
            <span className="flex items-center gap-2">
              ابدأ الآن مجاناً
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

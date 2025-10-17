import { motion } from "motion/react";
import { Users, Target, Clock, Award, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "تعلم من محترفين",
    description: "مدربون معتمدون بخبرات عالمية في مجال التحدث أمام الجمهور",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Target,
    title: "جلسات تفاعلية",
    description: "تدريبات عملية ومباشرة تركز على التطبيق الفعلي",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "نظام تعلم مرن",
    description: "جداول زمنية متنوعة تناسب جميع الأوقات",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Award,
    title: "شهادات معتمدة",
    description: "احصل على شهادات معترف بها دولياً",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "نتائج سريعة",
    description: "تحسن ملحوظ في الأداء خلال أسابيع",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "استرداد كامل خلال 14 يوم إذا لم تكن راضياً",
    gradient: "from-amber-500 to-yellow-500",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-32 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-orange-100 border border-orange-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-700">لماذا نحن؟</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            لماذا تختار
            <span className="block bg-gradient-to-l from-orange-600 to-amber-600 bg-clip-text text-transparent">
              منصة دليلك؟
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            نقدم لك تجربة تعليمية فريدة تجمع بين الخبرة العالمية والمحتوى العربي المتميز
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-orange-300 overflow-hidden transition-all shadow-lg hover:shadow-xl">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-gray-900 mb-3 text-right">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-right leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-32 h-32">
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${feature.gradient} opacity-5 blur-3xl`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            جاهز لبدء رحلتك معنا؟
          </p>
          <button className="group inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
            <span>اكتشف المزيد</span>
            <motion.span
              animate={{ x: [-5, 0, -5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

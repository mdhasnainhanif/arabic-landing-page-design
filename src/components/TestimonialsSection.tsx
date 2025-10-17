import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد السعيد",
    role: "مدير تنفيذي",
    image: "https://images.unsplash.com/photo-1580643375398-5174902ebcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDYzNzc5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "برنامج استثنائي غيّر طريقة تواصلي مع فريقي وعملائي. أصبحت أكثر ثقة وتأثيراً في كل عرض تقديمي. النتائج كانت أسرع مما توقعت!",
    rating: 5,
  },
  {
    name: "فاطمة الزهراني",
    role: "مدربة تطوير شخصي",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDU3OTgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "المحتوى غني والمدربون محترفون جداً. تعلمت أساليب جديدة ساعدتني في تطوير مهاراتي التدريبية بشكل كبير. أنصح به بشدة!",
    rating: 5,
  },
  {
    name: "خالد المطيري",
    role: "رائد أعمال",
    image: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDU4Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "كنت أخاف من التحدث أمام المستثمرين، الآن أقدم عروضي بثقة واحترافية. شكراً لهذا البرنامج الرائع! استثمار يستحق كل ريال.",
    rating: 5,
  },
  {
    name: "سارة العتيبي",
    role: "معلمة وكاتبة",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDU3OTgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "تجربة تعليمية متكاملة، من المحتوى إلى التطبيق العملي. استفدت كثيراً وأنصح الجميع بالانضمام. منصة احترافية بكل المقاييس.",
    rating: 5,
  },
  {
    name: "محمد الأحمد",
    role: "مدير مبيعات",
    image: "https://images.unsplash.com/photo-1580643375398-5174902ebcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDYzNzc5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "أفضل استثمار في تطوير الذات. البرنامج ساعدني على مضاعفة مبيعاتي من خلال تحسين مهارات التواصل والإقناع.",
    rating: 5,
  },
  {
    name: "نورة الشمري",
    role: "مستشارة أعمال",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDU3OTgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "منصة رائعة بمحتوى عالي الجودة. التدريبات العملية كانت مفيدة جداً وساعدتني في تحسين أدائي مع العملاء بشكل ملحوظ.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-[150px]" />
      </div>

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
            className="inline-block mb-4 px-4 py-2 rounded-full bg-rose-100 border border-rose-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-700">قصص النجاح</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            ماذا يقول
            <span className="block bg-gradient-to-l from-rose-600 to-orange-600 bg-clip-text text-transparent">
              متدربونا
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            آلاف المتدربين حققوا أهدافهم وغيّروا حياتهم
          </p>
        </motion.div>

        {/* Testimonials Grid with Masonry Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative h-full bg-white backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all group-hover:scale-[1.02] shadow-lg hover:shadow-xl">
                {/* Quote icon */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-12 transition-transform">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-end">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-right leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="flex-1 text-right">
                    <div className="text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-gray-200"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -bottom-px -right-px w-32 h-32 bg-gradient-to-br from-orange-500/10 to-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl lg:text-5xl text-gray-900 mb-2">+5000</div>
            <div className="text-gray-600">متدرب راضٍ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl text-gray-900 mb-2">4.9</div>
            <div className="text-gray-600">متوسط التقييم</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">نسبة الرضا</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

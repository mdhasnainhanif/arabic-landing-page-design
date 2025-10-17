import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Clock, Users, Star, ArrowLeft, Sparkles } from "lucide-react";
import { useState } from "react";

const courses = [
  {
    title: "أساسيات التحدث أمام الجمهور",
    description: "ابدأ رحلتك في عالم الإلقاء والتواصل الفعّال مع الجمهور من الصفر",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50YXRpb24lMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjA2Mzg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8 أسابيع",
    students: "1,250",
    rating: "4.9",
    level: "مبتدئ",
    gradient: "from-orange-500/10 to-amber-500/10",
    featured: true,
  },
  {
    title: "بناء الثقة بالنفس",
    description: "تغلب على الخوف والقلق وابنِ ثقتك في التحدث أمام الآخرين",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjA2Mzg0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "6 أسابيع",
    students: "980",
    rating: "4.8",
    level: "مبتدئ",
    gradient: "from-rose-500/10 to-pink-500/10",
  },
  {
    title: "فن الإلقاء الاحترافي",
    description: "أتقن فنون الإلقاء المتقدمة واحترف التأثير في جمهورك",
    image: "https://images.unsplash.com/photo-1573164574230-db1d5e960238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwc3RhZ2UlMjBjb25maWRlbnR8ZW58MXx8fHwxNzYwNjM4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "10 أسابيع",
    students: "750",
    rating: "5.0",
    level: "متقدم",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "القيادة والتأثير",
    description: "طور مهاراتك القيادية وتعلم كيفية التأثير الإيجابي في الآخرين",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjA2Mzg0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12 أسابيع",
    students: "620",
    rating: "4.9",
    level: "متقدم",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "مهارات التواصل الفعّال",
    description: "تعلم فن التواصل مع الآخرين وبناء علاقات قوية ومؤثرة",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50YXRpb24lMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjA2Mzg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "7 أسابيع",
    students: "1,100",
    rating: "4.9",
    level: "مبتدئ",
    gradient: "from-amber-500/10 to-yellow-500/10",
  },
  {
    title: "التدريب وتطوير الآخرين",
    description: "كن مدرباً محترفاً وساعد الآخرين على تحقيق أهدافهم",
    image: "https://images.unsplash.com/photo-1573164574230-db1d5e960238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwc3RhZ2UlMjBjb25maWRlbnR8ZW58MXx8fHwxNzYwNjM4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "14 أسابيع",
    students: "540",
    rating: "4.8",
    level: "متقدم",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
];

const filters = ["الكل", "مبتدئ", "متقدم"];

export function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filteredCourses = activeFilter === "الكل" 
    ? courses 
    : courses.filter(course => course.level === activeFilter);

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
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
            <span className="text-orange-700">برامجنا التدريبية</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            اختر البرنامج
            <span className="block bg-gradient-to-l from-orange-600 to-amber-600 bg-clip-text text-transparent">
              المناسب لك
            </span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              {/* Card */}
              <div className="relative h-full bg-white backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 hover:border-orange-300 transition-all group-hover:scale-[1.02] shadow-lg hover:shadow-xl">
                {/* Featured badge */}
                {course.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-sm">مميز</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                  
                  {/* Level badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full">
                    <span className="text-gray-900 text-sm">{course.level}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-3 text-right group-hover:text-orange-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-right mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full group/btn bg-gray-100 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 border border-gray-200 hover:border-transparent text-gray-900 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2">
                      المزيد من التفاصيل
                      <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button className="group px-8 py-4 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 text-gray-900 rounded-full transition-all">
            <span className="flex items-center gap-2">
              عرض جميع البرامج
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

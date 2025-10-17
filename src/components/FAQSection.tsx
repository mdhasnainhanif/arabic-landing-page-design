import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "هل البرامج مناسبة للمبتدئين؟",
    answer: "نعم بكل تأكيد! نقدم برامج متنوعة تناسب جميع المستويات من المبتدئين إلى المحترفين. كل برنامج مصمم بعناية لتطوير مهاراتك تدريجياً مع دعم كامل من مدربينا المعتمدين.",
  },
  {
    question: "ما هي مدة البرامج التدريبية؟",
    answer: "تتراوح مدة البرامج من 6 إلى 14 أسبوعاً حسب مستوى البرنامج وعمق المحتوى. كل برنامج مقسم إلى وحدات تعليمية يمكنك إكمالها حسب وتيرتك الخاصة مع التزامك بالجدول الزمني الموصى به.",
  },
  {
    question: "هل أحصل على شهادة معتمدة؟",
    answer: "نعم، بعد إتمام أي برنامج تدريبي بنجاح والمشاركة في التقييمات، ستحصل على شهادة معتمدة يمكنك إضافتها إلى ملفك المهني ومشاركتها على منصات التواصل الاحترافي مثل LinkedIn.",
  },
  {
    question: "هل التدريب عبر الإنترنت أم حضورياً؟",
    answer: "نوفر كلا الخيارين! يمكنك الاختيار بين التدريب عبر الإنترنت بمرونة كاملة، أو حضور ورش العمل والجلسات المباشرة في مراكزنا التدريبية. كما نقدم نموذجاً مدمجاً يجمع بين الاثنين.",
  },
  {
    question: "ما هي تكلفة البرامج؟",
    answer: "تختلف التكلفة حسب نوع ومستوى البرنامج. نوفر خطط دفع مرنة وعروضاً خاصة على مدار العام. يمكنك التواصل مع فريقنا للحصول على تفاصيل الأسعار وخيارات التقسيط المتاحة.",
  },
  {
    question: "هل يمكنني استرداد المبلغ إذا لم يعجبني البرنامج؟",
    answer: "نعم، نوفر ضمان استرداد المبلغ خلال أول 14 يوماً من بدء البرنامج إذا لم تكن راضياً عن المحتوى أو أسلوب التدريب. رضاك هو أولويتنا القصوى.",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-32 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <span className="text-orange-700">الأسئلة الشائعة</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            هل لديك
            <span className="block bg-gradient-to-l from-orange-600 to-amber-600 bg-clip-text text-transparent">
              أسئلة؟
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            إجابات على أكثر الأسئلة شيوعاً حول برامجنا
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4" dir="rtl">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group border-0 bg-gradient-to-br from-gray-50 to-white backdrop-blur-xl rounded-2xl px-8 border border-gray-200 hover:border-orange-300 transition-all overflow-hidden shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-6 text-gray-900 group-hover:text-orange-600 transition-colors">
                    <span className="text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-right">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center p-8 bg-gradient-to-br from-orange-100/50 to-amber-100/50 backdrop-blur-xl rounded-3xl border border-orange-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <MessageCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl text-gray-900 mb-3">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-gray-600 mb-6">
            فريقنا جاهز للإجابة على جميع استفساراتك
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-full transition-all shadow-lg shadow-orange-500/30">
            تواصل معنا
          </button>
        </motion.div>
      </div>
    </section>
  );
}

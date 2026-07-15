import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "QAUDIFY completely transformed how we manage our audit engagements. The real-time dashboard alone saves us hours of status meetings every week.",
    name: "Sarah Jenkins",
    role: "Audit Partner, Top 10 Firm",
    initial: "S"
  },
  {
    quote: "The working papers integration and risk assessment modules are world-class. It feels like software built by auditors, for auditors.",
    name: "Michael Chen",
    role: "Director of Audit Quality",
    initial: "M"
  },
  {
    quote: "Moving to QAUDIFY was seamless. Our entire team adopted it within days, and client collaboration has never been easier.",
    name: "Elena Rodriguez",
    role: "Managing Partner",
    initial: "E"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Loved by industry leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-8 font-medium">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

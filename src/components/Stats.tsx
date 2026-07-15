import { motion } from 'motion/react';

const stats = [
  { value: "500+", label: "Audit Engagements" },
  { value: "10+", label: "Audit Firms" },
  { value: "100%", label: "Cloud Ready" },
  { value: "24/7", label: "Support" }
];

export default function Stats() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

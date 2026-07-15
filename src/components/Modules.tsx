import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const modules = [
  "Engagement Management",
  "Audit Templates",
  "Clients",
  "Team",
  "Working Papers",
  "Financial Statements",
  "Review Notes",
  "Risk Register",
  "Reports",
  "Notifications",
  "Administration",
  "Analytics"
];

export default function Modules() {
  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Comprehensive Modules
          </h2>
          <p className="text-slate-500 dark:text-slate-400 dark:text-slate-500 max-w-2xl mx-auto">
            Everything is integrated. Data flows seamlessly from planning to the final report.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 p-6 rounded-2xl flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-primary transition-colors">{mod}</h3>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-slate-400 dark:text-slate-500 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

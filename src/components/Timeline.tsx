import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  "Create Engagement",
  "Planning",
  "Risk Assessment",
  "Field Work",
  "Review",
  "Final Report",
  "Archive"
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Audit Workflow Timeline
          </h2>
          <p className="text-slate-500 dark:text-slate-400 dark:text-slate-500">A structured approach to every engagement.</p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                className="flex flex-col items-center group relative"
              >
                {/* Mobile line connection */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-slate-100 dark:bg-slate-800 my-2" />
                )}
                
                <div className="w-12 h-12 bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all z-10 relative bg-white dark:bg-slate-950">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                
                <div className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200 text-center md:absolute md:top-full md:mt-6 md:w-32 md:-ml-10">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

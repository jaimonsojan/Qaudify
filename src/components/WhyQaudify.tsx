import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const reasons = [
  "Reduce paperwork",
  "Improve collaboration",
  "Complete audits faster",
  "Centralize documentation",
  "Real-time monitoring",
  "Built for modern audit firms"
];

export default function WhyQaudify() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Why leading firms choose QAUDIFY
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              We understand the complexities of modern auditing. Our platform is engineered to eliminate friction, ensuring your teams can focus on high-value analysis rather than administrative overhead.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl absolute inset-0 -z-10" />
            
            {/* Abstract visual representing efficiency/growth */}
            <div className="relative bg-slate-900 rounded-[2rem] p-8 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <div className="relative z-10 space-y-6">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-4 rounded-2xl flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-1/3 bg-slate-600 rounded-sm mb-2" />
                      <div className="h-2 w-full bg-slate-700 rounded-sm" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

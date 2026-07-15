import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to Modernize Your Audit Process?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Join the leading audit firms that are already delivering faster, higher-quality audits. Book a demo today and see QAUDIFY in action.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-300">We will be in touch shortly to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1.5">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1.5">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@firm.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Audit Partners LLC"
                    />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] mt-2"
                  >
                    Book a Demo
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

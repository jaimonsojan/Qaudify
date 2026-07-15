import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Activity, Users, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Modern Audit Management Software for Audit Firms</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Audit Smarter.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Deliver Faster.</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl">
              QAUDIFY is a cloud-based Audit Management Platform built for audit firms to manage every engagement from planning to completion.
              <br/><br/>
              Whether it is External Audit, Internal Audit, ICV Audit, Compliance Review or Risk Assessment, QAUDIFY centralizes your entire audit workflow into one intelligent platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-white text-base font-medium rounded-[16px] hover:bg-blue-700 transition-all shadow-[0_0_40px_8px_rgba(37,99,235,0.2)] flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-base font-medium rounded-[16px] hover:bg-slate-50 dark:bg-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Watch Overview
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-[24px] border border-slate-200/60 dark:border-slate-700/60 bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="h-14 border-b border-slate-100 dark:border-slate-800 flex items-center px-6 gap-4 bg-white/80 dark:bg-slate-950/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="h-6 w-48 bg-slate-100 dark:bg-slate-800 rounded-md ml-4" />
                <div className="ml-auto flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800" />
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 grid gap-6 bg-slate-50/50 dark:bg-slate-900/50">
                {/* Top Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-[16px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 dark:text-slate-500">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">Progress</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">78%</div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-[16px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 dark:text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-medium">Audit Status</span>
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">In Review</div>
                    <div className="flex -space-x-2 mt-1">
                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white" />
                    </div>
                  </div>
                </div>

                {/* Engagement List & Analytics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-5 rounded-[16px] border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">Engagement List</span>
                      <FileText className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 dark:bg-slate-900 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                              <span className="text-indigo-600 font-medium text-xs">Q{i}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-900 dark:text-white">TechCorp Q{i} Audit</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-500">Internal Audit</div>
                            </div>
                          </div>
                          <div className="text-xs font-medium px-2 py-1 bg-green-50 text-green-600 rounded-md">Active</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-5 rounded-[16px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Analytics</span>
                    <div className="flex-1 flex items-end gap-2">
                      {[40, 70, 45, 90, 65].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-6 top-32 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-[16px] shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Planning Complete</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-500">2 mins ago</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

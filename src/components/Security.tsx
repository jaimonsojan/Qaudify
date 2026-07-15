import { motion } from 'motion/react';
import { Lock, Shield, Server, FileDigit, KeyRound } from 'lucide-react';

const features = [
  { icon: <KeyRound className="w-6 h-6" />, title: "Role Based Access" },
  { icon: <Lock className="w-6 h-6" />, title: "Encrypted Storage" },
  { icon: <Server className="w-6 h-6" />, title: "Cloud Backup" },
  { icon: <FileDigit className="w-6 h-6" />, title: "Audit Trail" },
  { icon: <Shield className="w-6 h-6" />, title: "Secure Authentication" }
];

export default function Security() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-white/10">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Enterprise-grade security.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
            Your clients trust you with their most sensitive data. We provide the infrastructure to keep that trust intact.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-full"
            >
              <div className="text-primary">{feature.icon}</div>
              <span className="font-medium text-slate-200">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

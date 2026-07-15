import { motion } from 'motion/react';

export default function TrustedBy() {
  return (
    <section className="py-10 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-8 tracking-wide uppercase">
          Trusted by growing audit firms across Qatar.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {/* Mock Logos - Replace with real SVG logos */}
          {['KPMG', 'Deloitte', 'PwC', 'EY', 'BDO', 'Grant Thornton'].map((name) => (
            <div key={name} className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

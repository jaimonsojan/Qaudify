import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What is QAUDIFY?", a: "QAUDIFY is a comprehensive cloud-based Audit Management Platform designed specifically for modern audit firms to manage all their engagements efficiently." },
  { q: "Can I manage multiple audit firms?", a: "Yes, our Enterprise plan supports multi-entity management with unified reporting and separate workspaces." },
  { q: "Does QAUDIFY support External Audit?", a: "Absolutely. QAUDIFY supports all types of audits including External, Internal, ICV, Compliance, and Risk Assessments." },
  { q: "Can we customize templates?", a: "Yes, you can fully customize audit templates, checklists, and working papers to match your firm's specific methodology." },
  { q: "Is training included?", a: "Yes, we provide comprehensive onboarding and training sessions to ensure your team can maximize the platform's value from day one." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-950 hover:bg-slate-50 dark:bg-slate-900 transition-colors text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-4 pt-2 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

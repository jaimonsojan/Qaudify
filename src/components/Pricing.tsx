import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    desc: "Perfect for boutique audit firms looking to modernize their practice.",
    features: ["Up to 5 Team Members", "Unlimited Engagements", "Basic Working Papers", "Standard Support"]
  },
  {
    name: "Professional",
    desc: "For growing firms that need advanced analytics and collaboration.",
    features: ["Up to 20 Team Members", "Advanced Analytics", "Client Portal", "Priority Support"],
    popular: true
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for large, multinational audit practices.",
    features: ["Unlimited Team Members", "Custom Integrations", "Dedicated Success Manager", "24/7 Phone Support"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 dark:text-slate-500">
            Choose the plan that best fits your firm's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border ${plan.popular ? 'border-primary shadow-xl shadow-primary/5 relative' : 'border-slate-200 dark:border-slate-700 shadow-sm'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-8 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <button className={`w-full py-3 rounded-xl font-medium transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:bg-slate-700'}`}>
                  Contact Sales
                </button>
              </div>

              <div className="space-y-4 flex-1">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

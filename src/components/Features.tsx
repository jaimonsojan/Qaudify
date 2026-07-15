import { motion } from 'motion/react';
import { Briefcase, Calendar, FileStack, MessageSquare, AlertTriangle, FileSpreadsheet, Users, Globe, LayoutTemplate, PieChart, FolderOpen, ShieldCheck } from 'lucide-react';

const features = [
  { icon: <Briefcase className="w-5 h-5" />, title: "Engagement Management", desc: "Manage unlimited audit engagements from one place." },
  { icon: <Calendar className="w-5 h-5" />, title: "Audit Planning", desc: "Planning, timelines and audit programs." },
  { icon: <FileStack className="w-5 h-5" />, title: "Working Papers", desc: "Digital working papers with attachments." },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Review Notes", desc: "Reviewer comments and issue tracking." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Risk Assessment", desc: "Identify and evaluate audit risks." },
  { icon: <FileSpreadsheet className="w-5 h-5" />, title: "Financial Statements", desc: "Prepare financial statements efficiently." },
  { icon: <Users className="w-5 h-5" />, title: "Team Collaboration", desc: "Assign tasks and monitor progress." },
  { icon: <Globe className="w-5 h-5" />, title: "Client Portal", desc: "Secure document sharing." },
  { icon: <LayoutTemplate className="w-5 h-5" />, title: "Templates", desc: "Reusable audit templates." },
  { icon: <PieChart className="w-5 h-5" />, title: "Dashboards", desc: "Real-time KPIs and analytics." },
  { icon: <FolderOpen className="w-5 h-5" />, title: "Document Management", desc: "Centralized document repository." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Role Based Access", desc: "Secure permissions and approvals." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Everything You Need to Run Your Audit Firm
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A comprehensive suite of tools designed specifically for modern audit workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 rounded-[20px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

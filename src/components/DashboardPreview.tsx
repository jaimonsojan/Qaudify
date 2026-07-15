import { motion } from 'motion/react';
import { LayoutDashboard, CheckCircle2, Clock, Users, PieChart, Activity, Bell } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            See the Big Picture
          </h2>
          <p className="text-lg text-slate-400">
            A command center designed to give you total visibility over your firm's performance.
          </p>
        </div>

        {/* Laptop Mockup Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl"
        >
          {/* Laptop Screen Frame */}
          <div className="relative rounded-t-[2rem] border-[8px] border-b-0 border-slate-800 bg-slate-800 overflow-hidden shadow-2xl">
            {/* Screen Content */}
            <div className="aspect-[16/10] bg-slate-50 flex flex-col relative overflow-hidden">
              
              {/* App Navbar */}
              <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded bg-primary" />
                  <div className="text-slate-800 font-semibold text-sm">QAUDIFY</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"><Bell className="w-3 h-3 text-slate-500"/></div>
                  <div className="w-6 h-6 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* App Body */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-48 border-r border-slate-200 bg-white p-3 flex flex-col gap-1 shrink-0">
                  {['Dashboard', 'Engagements', 'Tasks', 'Team', 'Reports'].map((item, i) => (
                    <div key={item} className={`px-3 py-2 rounded-lg text-xs font-medium ${i === 0 ? 'bg-primary/10 text-primary' : 'text-slate-600'}`}>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 bg-slate-50 overflow-hidden flex flex-col gap-6">
                  
                  {/* Cards Row */}
                  <div className="grid grid-cols-4 gap-4 shrink-0">
                    {[
                      { icon: <Briefcase className="w-4 h-4 text-primary"/>, val: "24", label: "Active Audits" },
                      { icon: <Clock className="w-4 h-4 text-orange-500"/>, val: "12", label: "Pending Review" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-green-500"/>, val: "89%", label: "Completion Rate" },
                      { icon: <Users className="w-4 h-4 text-indigo-500"/>, val: "45", label: "Team Members" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-slate-900">{stat.val}</div>
                        <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Main Grid */}
                  <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
                    {/* Chart Area */}
                    <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col">
                      <div className="text-sm font-semibold text-slate-800 mb-4">Firm Performance</div>
                      <div className="flex-1 flex items-end gap-2 px-2">
                        {[30, 45, 25, 60, 40, 75, 50, 85, 65, 90, 80, 95].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-colors cursor-pointer"
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Kanban/Recent Activity Area */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col">
                      <div className="text-sm font-semibold text-slate-800 mb-4">Recent Activities</div>
                      <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-slate-100 shrink-0" />
                            <div className="flex flex-col gap-1 w-full">
                              <div className="h-2 w-full bg-slate-200 rounded-sm" />
                              <div className="h-2 w-2/3 bg-slate-100 rounded-sm" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Glossy reflection over screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
          </div>
          
          {/* Laptop Base */}
          <div className="h-6 bg-slate-800 w-[110%] -ml-[5%] rounded-b-2xl rounded-t-sm relative shadow-2xl border-t border-slate-700/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-b-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Briefcase(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
}

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors">Log in</button>
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-[14px] hover:bg-slate-800 transition-colors"
            >
              Book a Demo
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-100 px-4 py-6 flex flex-col gap-4">
          <a href="#features" className="text-base font-medium text-slate-600 dark:text-slate-300">Features</a>
          <a href="#solutions" className="text-base font-medium text-slate-600 dark:text-slate-300">Solutions</a>
          <a href="#pricing" className="text-base font-medium text-slate-600 dark:text-slate-300">Pricing</a>
          <a href="#contact" className="text-base font-medium text-slate-600 dark:text-slate-300">Contact</a>
          <hr className="border-gray-100 my-2" />
          <button className="text-base font-medium text-slate-600 dark:text-slate-300 w-full text-left">Log in</button>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3 bg-slate-900 text-white text-base font-medium rounded-xl w-full"
          >
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
}

import { Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              Modern Audit Management Platform.<br/>
              One Platform. Every Audit. Completely Connected.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Solutions', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} QAUDIFY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

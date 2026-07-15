import fs from 'fs';
import path from 'path';

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') && !['ThemeProvider.tsx', 'ThemeToggle.tsx', 'Logo.tsx'].includes(f));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Improve viewport margins to trigger earlier/richer
  content = content.replace(/viewport={{ once: true }}/g, 'viewport={{ once: true, margin: "-50px" }}');
  
  // Make initial properties a bit more dramatic
  content = content.replace(/initial={{ opacity: 0, y: 20 }}/g, 'initial={{ opacity: 0, y: 40, scale: 0.95 }}');
  content = content.replace(/whileInView={{ opacity: 1, y: 0 }}/g, 'whileInView={{ opacity: 1, y: 0, scale: 1 }}');

  // Increase transition duration slightly for smoother feel
  content = content.replace(/transition={{ duration: 0.5/g, 'transition={{ duration: 0.7, ease: "easeOut"');
  content = content.replace(/transition={{ duration: 0.4/g, 'transition={{ duration: 0.6, ease: "easeOut"');

  // Add glassmorphism to cards where appropriate
  // For Features.tsx and others, replacing standard bg-white with glassmorphism classes
  if(file === 'Features.tsx' || file === 'Modules.tsx' || file === 'Testimonials.tsx' || file === 'Pricing.tsx') {
    content = content.replace(/className="bg-white dark:bg-slate-950/g, 'className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl');
    content = content.replace(/className={`bg-white dark:bg-slate-950/g, 'className={`bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl');
    content = content.replace(/bg-slate-50 p-8 rounded-3xl/g, 'bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.1)]');
  }

  if(file === 'Hero.tsx') {
    content = content.replace(/bg-white\/50 dark:bg-slate-950\/50 backdrop-blur-2xl/g, 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]');
    content = content.replace(/bg-white dark:bg-slate-950 p-4/g, 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4');
    content = content.replace(/bg-white dark:bg-slate-950 p-5/g, 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-5');
  }

  if(file === 'DashboardPreview.tsx') {
    content = content.replace(/bg-white p-4/g, 'bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg p-4');
  }

  fs.writeFileSync(filePath, content);
});

console.log('Enhanced animations and glass effects');

const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') && !['ThemeProvider.tsx', 'ThemeToggle.tsx', 'Logo.tsx', 'DashboardPreview.tsx', 'Security.tsx', 'CTA.tsx'].includes(f));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Standard substitutions
  content = content.replace(/bg-white(?!\/)/g, 'bg-white dark:bg-slate-950');
  content = content.replace(/bg-white\/([0-9]+)/g, 'bg-white/$1 dark:bg-slate-950/$1');
  
  content = content.replace(/text-slate-900/g, 'text-slate-900 dark:text-white');
  content = content.replace(/text-slate-800/g, 'text-slate-800 dark:text-slate-100');
  content = content.replace(/text-slate-700/g, 'text-slate-700 dark:text-slate-200');
  content = content.replace(/text-slate-600/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/text-slate-500/g, 'text-slate-500 dark:text-slate-400');
  content = content.replace(/text-slate-400/g, 'text-slate-400 dark:text-slate-500');

  content = content.replace(/bg-slate-50(?!\/)/g, 'bg-slate-50 dark:bg-slate-900');
  content = content.replace(/bg-slate-50\/([0-9]+)/g, 'bg-slate-50/$1 dark:bg-slate-900/$1');
  
  content = content.replace(/bg-slate-100(?!\/)/g, 'bg-slate-100 dark:bg-slate-800');
  content = content.replace(/bg-slate-100\/([0-9]+)/g, 'bg-slate-100/$1 dark:bg-slate-800/$1');
  
  content = content.replace(/bg-slate-200(?!\/)/g, 'bg-slate-200 dark:bg-slate-700');
  content = content.replace(/bg-slate-200\/([0-9]+)/g, 'bg-slate-200/$1 dark:bg-slate-700/$1');

  content = content.replace(/border-slate-100(?!\/)/g, 'border-slate-100 dark:border-slate-800');
  content = content.replace(/border-slate-100\/([0-9]+)/g, 'border-slate-100/$1 dark:border-slate-800/$1');
  
  content = content.replace(/border-slate-200(?!\/)/g, 'border-slate-200 dark:border-slate-700');
  content = content.replace(/border-slate-200\/([0-9]+)/g, 'border-slate-200/$1 dark:border-slate-700/$1');

  fs.writeFileSync(filePath, content);
});

console.log('Converted theme classes');

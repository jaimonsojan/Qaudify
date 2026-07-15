export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* 
        Replace the div below with your <img> tag when you have the logo image. 
        Example: <img src="/my-logo.png" alt="QAUDIFY Logo" className="h-8" />
      */}
      <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shrink-0">
        <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-sm"></div>
      </div>
      <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">QAUDIFY</span>
    </div>
  );
}

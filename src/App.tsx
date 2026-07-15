/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Stats from './components/Stats';
import Features from './components/Features';
import Timeline from './components/Timeline';
import DashboardPreview from './components/DashboardPreview';
import WhyQaudify from './components/WhyQaudify';
import Modules from './components/Modules';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="qaudify-theme">
      <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 selection:bg-primary selection:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <Stats />
          <Features />
          <Timeline />
          <DashboardPreview />
          <WhyQaudify />
          <Modules />
          <Security />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

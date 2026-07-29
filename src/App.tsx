import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { BloodComponents } from './components/BloodComponents';
import { ABOGroups } from './components/ABOGroups';
import { CompatibilityTable } from './components/CompatibilityTable';
import { Quiz } from './components/Quiz';
import { FAQ } from './components/FAQ';
import { TextSections, DonationCards, InheritanceAndTesting } from './components/TextSections';
import { ContactForm } from './components/ContactForm';
import { Droplet, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased text-slate-900 dark:text-slate-100 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />

        <Section 
          id="introduction" 
          title="Introduction to Blood" 
          subtitle="Blood is the river of life that flows through our bodies, delivering essential elements and protecting us from disease."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">What is blood?</h3>
              <p className="text-slate-600 dark:text-slate-300">A specialized body fluid consisting of cells suspended in plasma. It accounts for about 7-8% of human body weight.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Importance</h3>
              <p className="text-slate-600 dark:text-slate-300">It transports oxygen, nutrients, and hormones to cells, removes waste, and plays a crucial role in the immune system and temperature regulation.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Why groups matter</h3>
              <p className="text-slate-600 dark:text-slate-300">Not all blood is the same. Mixing incompatible blood types can cause life-threatening immune reactions during transfusions.</p>
            </div>
          </div>
        </Section>

        <Section id="components" title="Blood Components" subtitle="Whole blood is made up of four main components, each with a specific and vital role." lightBg>
          <BloodComponents />
        </Section>

        <Section id="abo-groups" title="ABO Blood Group System" subtitle="The most important blood type system in human blood transfusion.">
          <ABOGroups />
        </Section>

        <Section id="rh-factor" title="The Rh Factor" lightBg>
          <TextSections />
        </Section>

        <Section id="compatibility" title="Blood Compatibility" subtitle="Understanding who can safely receive and donate blood is critical in medical emergencies.">
          <CompatibilityTable />
        </Section>

        <Section id="donation" title="Blood Donation" subtitle="Give blood and keep the world beating. A single donation can save multiple lives." lightBg>
          <DonationCards />
        </Section>
        
        <Section id="inheritance-testing" title="Genetics & Testing" subtitle="How you get your blood type and how medical professionals identify it.">
          <InheritanceAndTesting />
        </Section>

        <Section id="save-contact" title="Donor Directory" subtitle="Save blood donor information directly to your personal Google Contacts for future reference." lightBg>
          <ContactForm />
        </Section>

        <Section id="quiz" title="Test Your Knowledge" subtitle="Take this interactive quiz to see how much you've learned about blood groups.">
          <Quiz />
        </Section>

        <Section id="faq" title="Frequently Asked Questions" subtitle="Common questions and misconceptions about blood and blood types." lightBg>
          <FAQ />
        </Section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 px-6 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="bg-red-600 p-2 rounded-xl">
              <Droplet size={20} className="fill-current" />
            </div>
            <span className="text-xl font-bold">Blood Group Guide</span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed mb-6">
            <strong>Educational Disclaimer:</strong> The information provided on this website is for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Blood Group Guide. All rights reserved.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all z-50 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

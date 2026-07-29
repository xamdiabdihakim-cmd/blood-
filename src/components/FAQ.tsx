import { useState } from 'react';
import { faqs } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id} 
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors focus:outline-none"
            >
              <span className="font-bold text-lg text-slate-900 dark:text-white pr-8">
                {faq.question}
              </span>
              <ChevronDown 
                className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

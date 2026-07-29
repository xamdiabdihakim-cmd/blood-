import { motion } from 'motion/react';
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  lightBg?: boolean;
}

export function Section({ id, title, subtitle, children, className = '', lightBg = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 sm:px-8 lg:px-12 ${lightBg ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-950'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-red-600 dark:bg-red-500 mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

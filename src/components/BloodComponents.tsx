import React from 'react';
import { bloodComponents } from '../data';
import { Droplet, Shield, Bandage, Waves } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Droplet: <Droplet className="w-8 h-8 text-red-500" />,
  Shield: <Shield className="w-8 h-8 text-blue-500" />,
  Bandage: <Bandage className="w-8 h-8 text-yellow-500" />,
  Waves: <Waves className="w-8 h-8 text-cyan-500" />
};

export function BloodComponents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {bloodComponents.map((component) => (
        <div 
          key={component.id}
          className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {iconMap[component.icon]}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {component.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {component.description}
          </p>
        </div>
      ))}
    </div>
  );
}

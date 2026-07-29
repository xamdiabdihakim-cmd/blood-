import { Droplet } from 'lucide-react';
import { motion } from 'motion/react';
import doctorImage from '../assets/images/doctor_hero_1785345473934.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 text-red-200 dark:text-red-900/30 w-32 h-32 blur-2xl rounded-full bg-current" />
      <div className="absolute bottom-1/4 right-10 text-blue-200 dark:text-blue-900/30 w-48 h-48 blur-3xl rounded-full bg-current" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 font-medium text-sm mb-6">
            <Droplet size={16} className="fill-current" />
            <span>The Essence of Life</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Blood Group <span className="text-red-600 dark:text-red-500">Guide</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
            Learn everything about human blood groups, their components, compatibility, and the life-saving importance of blood donation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#introduction"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Exploring
            </a>
            <a 
              href="#quiz"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Take the Quiz
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src={doctorImage} 
                alt="Medical Professional" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating cells/badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20"
            >
              <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-xl text-red-600 dark:text-red-400">
                <Droplet size={24} className="fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Donate</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Save Lives</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center font-bold text-blue-700 text-sm">A+</div>
                <div className="w-10 h-10 rounded-full bg-red-100 border-2 border-white flex items-center justify-center font-bold text-red-700 text-sm">O-</div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center font-bold text-emerald-700 text-sm">B+</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

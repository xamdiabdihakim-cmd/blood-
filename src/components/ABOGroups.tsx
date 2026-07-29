import { aboGroups } from '../data';
import { ShieldAlert, Droplet } from 'lucide-react';

export function ABOGroups() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {aboGroups.map((group) => (
        <div 
          key={group.group}
          className={`relative overflow-hidden rounded-3xl border p-8 transition-all hover:shadow-lg ${group.color}`}
        >
          {/* Decorative large letter */}
          <div className="absolute -right-6 -top-6 text-9xl font-black opacity-10 select-none pointer-events-none">
            {group.group}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-extrabold mb-6 flex items-center gap-4">
              Group {group.group}
            </h3>
            
            <p className="text-lg mb-6 opacity-90 font-medium">
              {group.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Droplet size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wider opacity-80">Antigens</span>
                </div>
                <p className="font-medium">{group.antigens}</p>
              </div>
              <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wider opacity-80">Antibodies</span>
                </div>
                <p className="font-medium">{group.antibodies}</p>
              </div>
            </div>
            
            <div className="bg-white/60 dark:bg-black/30 p-4 rounded-xl">
              <span className="font-bold mr-2">Medical Importance:</span>
              {group.importance}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

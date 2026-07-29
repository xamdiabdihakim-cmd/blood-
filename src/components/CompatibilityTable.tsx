import { compatibilityData } from '../data';
import { Heart, Activity } from 'lucide-react';

export function CompatibilityTable() {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <th className="p-5 font-semibold text-slate-900 dark:text-white">Blood Type</th>
              <th className="p-5 font-semibold text-slate-900 dark:text-white">Can Donate To</th>
              <th className="p-5 font-semibold text-slate-900 dark:text-white">Can Receive From</th>
            </tr>
          </thead>
          <tbody>
            {compatibilityData.map((row, index) => (
              <tr 
                key={row.type} 
                className={`border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors ${index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50/30 dark:bg-slate-800/50'}`}
              >
                <td className="p-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 font-bold text-lg shadow-sm">
                    {row.type}
                  </span>
                </td>
                <td className="p-5 text-slate-700 dark:text-slate-300">
                  <div className="flex flex-wrap gap-2">
                    {row.canDonateTo.map(type => (
                      <span key={type} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                    {row.isUniversalDonor && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 rounded-full text-sm font-bold">
                        <Heart size={14} className="fill-current" /> Universal Donor
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-5 text-slate-700 dark:text-slate-300">
                  <div className="flex flex-wrap gap-2">
                    {row.canReceiveFrom.map(type => (
                      <span key={type} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                    {row.isUniversalRecipient && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 rounded-full text-sm font-bold">
                        <Activity size={14} /> Universal Recipient
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

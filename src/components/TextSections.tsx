import { ArrowRight, HeartHandshake, Syringe, TestTube2, Dna, Activity } from 'lucide-react';

export function TextSections() {
  return (
    <>
      {/* Introduction Section (Rendered inline in App) */}
      
      {/* Rh Factor Section content block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 mb-6">
            <Activity size={32} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Understanding the Rh Factor</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            The Rh factor is an inherited protein found on the surface of red blood cells. If your blood has the protein, you're Rh positive (+). If your blood lacks the protein, you're Rh negative (-).
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mt-1"><ArrowRight size={16} /></div>
              <div>
                <strong className="block text-slate-900 dark:text-white">Transfusion Safety</strong>
                <span className="text-slate-600 dark:text-slate-400">Rh-negative patients should generally only receive Rh-negative blood to prevent severe immune reactions.</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mt-1"><ArrowRight size={16} /></div>
              <div>
                <strong className="block text-slate-900 dark:text-white">Pregnancy Importance</strong>
                <span className="text-slate-600 dark:text-slate-400">If an Rh-negative mother carries an Rh-positive baby, she may need treatment (Rh immunoglobulin) to prevent her body from producing antibodies that could harm future pregnancies.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
               <span className="text-xl font-bold text-slate-900 dark:text-white">Population Distribution</span>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Rh Positive (+)</span>
                  <span className="text-slate-500">~85%</span>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Rh Negative (-)</span>
                  <span className="text-slate-500">~15%</span>
                </div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 w-[15%] rounded-full"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export function DonationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        <HeartHandshake className="w-12 h-12 text-red-500 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Who can donate</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Generally, healthy individuals aged 17 or older, weighing at least 110 lbs, can donate blood.</p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        <Activity className="w-12 h-12 text-blue-500 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Benefits</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm">One donation can save up to three lives. It also provides a mini physical exam for the donor.</p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        <Syringe className="w-12 h-12 text-emerald-500 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">The Process</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Takes about an hour total. The actual donation takes 8-10 minutes. Completely safe and sterile.</p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        <TestTube2 className="w-12 h-12 text-purple-500 mb-4" />
        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Safety Tips</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Hydrate well, eat a healthy meal beforehand, and avoid heavy lifting for the rest of the day.</p>
      </div>
    </div>
  );
}

export function InheritanceAndTesting() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
        <Dna className="w-12 h-12 text-blue-500 mb-6" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Blood Group Inheritance</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Blood type is inherited genetically from parents. Each parent passes on one of two ABO alleles (A, B, or O) to their child.
        </p>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> A and B are dominant over O.</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> A and B are co-dominant (resulting in AB).</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> Rh positive is dominant over Rh negative.</li>
        </ul>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
        <TestTube2 className="w-12 h-12 text-amber-500 mb-6" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Blood Testing</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Blood typing is performed by mixing a sample of blood with antibodies against type A and B blood.
        </p>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500" /> <strong>Agglutination:</strong> If the blood cells stick together, it means the blood reacted with that antibody.</li>
          <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500" /> <strong>Rh Typing:</strong> Similar test using anti-Rh antibodies.</li>
        </ul>
      </div>
    </div>
  );
}

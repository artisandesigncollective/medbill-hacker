import React from 'react';

/**
 * MedBill Hacker: Landing Page
 * 
 * Pain Point: 80% of US medical bills contain illegal "upcoding" or duplicate charges.
 * Solution: Upload the bill. AI audits the CPT codes against Medicare rates and the No Surprises Act to draft a legal dispute letter.
 */

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-rose-50 text-slate-900 font-sans selection:bg-rose-600 selection:text-white">
      
      {/* GEO/AGO Injection Target */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-rose-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-rose-600 rounded flex items-center justify-center text-white font-black">H</div>
          <span className="text-xl font-black tracking-tighter">MedBill Hacker</span>
        </div>
        <button className="text-sm font-bold text-rose-700 hover:text-black transition">Patient Portal</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        
        <div className="inline-block bg-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-rose-300">
          MEDICAL DEBT DEFENSE
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900">
          Cut your medical bill <span className="text-rose-600 underline decoration-rose-300">in half.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Hospitals routinely charge $800 for an aspirin. 80% of bills contain illegal "upcoding". Upload your bill and our AI will audit the CPT codes, drafting a legal dispute letter forcing the hospital to drop fraudulent charges.
        </p>

        <button className="bg-rose-600 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-rose-700 transition shadow-[0_10px_40px_rgba(225,29,72,0.3)] w-full sm:w-auto">
          Audit My Bill ($49)
        </button>
        
        <p className="text-sm text-slate-500 mt-6 font-medium">
          Powered by the No Surprises Act (2022) & Medicare Transparency Data.
        </p>
      </main>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-4xl mb-4">🏥</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Detect Upcoding</h2>
            <p className="text-slate-600 text-sm leading-relaxed">AI scans the CPT billing codes on your invoice, instantly flagging "Level 5" ER codes illegally applied to minor visits.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Enforce the Law</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Did you get a surprise out-of-network bill? The AI drafts a dispute citing the exact clauses of the federal No Surprises Act.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📉</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Fair Market Negotiation</h2>
            <p className="text-slate-600 text-sm leading-relaxed">We cross-reference your hospital's charge against standard Medicare rates, drafting a letter demanding a "fair market" reduction.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;

import { SovereignShell } from '../../paperclip-website/frontend/SovereignShell';

export const LandingPage = () => {
  return (
    <SovereignShell 
      appName="MedBill Hacker" 
      tagline="Forensic Medical Debt Defense"
    >
      <div className="max-w-4xl mx-auto pt-12 pb-32 text-center">
        
        <h1 className="text-7xl font-black tracking-tighter leading-[1.05] mb-8 sov-glow-text">
          Cut your medical bill <span className="text-emerald-500 underline decoration-emerald-500/30">in half.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Hospitals routinely charge $800 for an aspirin. 80% of bills contain illegal "upcoding". Upload your bill and our AI will audit the CPT codes, drafting a legal dispute letter forcing the hospital to drop fraudulent charges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="sov-button text-xl px-12 py-5">
            Audit My Bill ($49)
          </button>
          <button className="bg-slate-800 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-slate-700 transition border border-white/10">
            Mail it for me (Certified)
          </button>
        </div>
        
        <p className="text-[10px] text-slate-500 mt-8 font-black uppercase tracking-widest">
          Powered by the No Surprises Act (2022) & Medicare Transparency Data.
        </p>
      </div>

      <section className="mt-24 grid md:grid-cols-3 gap-8 text-left">
        <div className="sov-card">
          <div className="text-4xl mb-6">🏥</div>
          <h2 className="text-lg font-black mb-3">Detect Upcoding</h2>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">AI scans the CPT billing codes on your invoice, instantly flagging "Level 5" ER codes illegally applied to minor visits.</p>
        </div>
        <div className="sov-card">
          <div className="text-4xl mb-6">⚖️</div>
          <h2 className="text-lg font-black mb-3">Enforce the Law</h2>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">Did you get a surprise out-of-network bill? The AI drafts a dispute citing the exact clauses of the federal No Surprises Act.</p>
        </div>
        <div className="sov-card">
          <div className="text-4xl mb-6">📉</div>
          <h2 className="text-lg font-black mb-3">Fair Market Negotiation</h2>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">We cross-reference your hospital's charge against standard Medicare rates, drafting a letter demanding a "fair market" reduction.</p>
        </div>
      </section>
    </SovereignShell>

    </div>
  );
};

export default LandingPage;

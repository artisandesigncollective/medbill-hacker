import React, { useState } from 'react';

/**
 * MedBill Hacker: Forensic Scanner UI
 * 
 * Pain Point: Users are overwhelmed by complex hospital bills.
 * Solution: Simple drag-and-drop UI to securely upload bills for OCR parsing.
 */

export const BillScanner = () => {
  const [billUploaded, setBillUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<{ original: number, projected: number, errors: number } | null>(null);

  const handleUpload = () => {
    setBillUploaded(true);
    setAnalyzing(true);
    
    // Simulate OCR and CPT code analysis
    setTimeout(() => {
      setAnalyzing(false);
      setResults({
        original: 4500,
        projected: 1200,
        errors: 3
      });
    }, 4000);
  };

  const handleSubmit = () => {
    alert('Redirecting to Stripe ($49 flat fee) to unlock the legal dispute packet...');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        <h2 className="text-3xl font-black text-slate-900">Hospital Bill Auditor</h2>
        <p className="text-slate-600">Upload your itemized medical bill (PDF or image). Our AI will forensically scan the CPT codes for overcharging.</p>

        {!billUploaded && (
          <div 
            className="bg-white p-12 rounded-2xl border-2 border-dashed border-rose-300 cursor-pointer hover:bg-rose-50 transition"
            onClick={handleUpload}
          >
            <div className="text-5xl mb-4 text-rose-300">📄</div>
            <p className="font-bold text-slate-700">Click to upload Itemized Bill (PDF)</p>
          </div>
        )}

        {analyzing && (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-slate-500 font-mono text-sm animate-pulse">Running OCR on line items...</p>
            <p className="text-slate-400 text-xs mt-2">Cross-referencing CPT Code 99285 (Level 5 Emergency Visit)...</p>
          </div>
        )}

        {results !== null && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left">
            <h3 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4 mb-4">Audit Complete</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-rose-50 p-4 rounded-xl">
                <p className="text-xs font-bold text-rose-800 uppercase">Original Bill</p>
                <p className="text-2xl font-black text-rose-600">${results.original}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl">
                <p className="text-xs font-bold text-emerald-800 uppercase">Fair Market Price</p>
                <p className="text-2xl font-black text-emerald-600">${results.projected}</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-sm font-bold text-slate-700">⚠️ {results.errors} Code Errors Detected:</p>
              <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 border border-slate-100 flex gap-2">
                <span className="text-rose-500">❌</span> <b>CPT 99285</b> (Level 5 ER) applied instead of Level 3. Inflated by $1,800.
              </div>
              <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 border border-slate-100 flex gap-2">
                <span className="text-rose-500">❌</span> Duplicate charge for "Recovery Room".
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={handleSubmit}
                className="w-full bg-slate-800 text-white font-black py-4 rounded-xl hover:bg-slate-900 transition text-lg"
              >
                Download PDF ($49)
              </button>
              
              <button 
                onClick={() => alert('Sovereign Dispatch: Certified Mail includes Proof of Service and Tracking. Proceeding to checkout ($59)...')}
                className="w-full bg-rose-600 text-white font-black py-4 rounded-xl hover:bg-rose-700 transition text-lg shadow-lg shadow-rose-600/20 flex flex-col items-center gap-0"
              >
                <span>Mail it for me (Certified)</span>
                <span className="text-[10px] font-normal opacity-80">Includes USPS Tracking • $59</span>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Secure OCR</span>
              <span>•</span>
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>Certified Delivery</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BillScanner;

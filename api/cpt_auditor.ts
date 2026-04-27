/**
 * MedBill Hacker: CPT Forensic Auditor
 * Detects "Upcoding" by comparing hospital bills to the Medicare Physician Fee Schedule (MPFS).
 */

export interface BillItem {
  code: string;
  description: string;
  chargedAmount: number;
}

const FAIR_MARKET_DATABASE: Record<string, number> = {
  '99214': 125.00, // Office visit, level 4
  '70450': 250.00, // CT Scan Head
  '80053': 45.00,  // Comprehensive metabolic panel
  '93000': 30.00   // EKG
};

export function auditBill(items: BillItem[]) {
  const discrepancies = items.map(item => {
    const fairPrice = FAIR_MARKET_DATABASE[item.code];
    if (fairPrice && item.chargedAmount > fairPrice * 3) {
      return {
        ...item,
        fairPrice,
        markup: `${((item.chargedAmount / fairPrice) * 100).toFixed(0)}%`,
        violation: "Predatory Markup / Possible Upcoding"
      };
    }
    return null;
  }).filter(d => d !== null);

  return {
    discrepancies,
    totalPotentialSavings: discrepancies.reduce((acc, d) => acc + (d!.chargedAmount - d!.fairPrice), 0),
    recommendation: discrepancies.length > 0 ? "Generate MPFS Hardship Reversal Letter" : "Bill appears nominal"
  };
}

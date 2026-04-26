# MedBill Hacker — PRD

## Feature Matrix
### ✅ Built
| Feature | File |
|---------|------|
| Landing Page | `frontend/LandingPage.tsx` |
| Bill Scanner (OCR simulation) | `frontend/BillScanner.tsx` |
| Stripe $49 Checkout | `api/stripe_fee.ts` |
| Demand Letter Generator | `api/generate_demand.ts` |

### ⬜ Planned
- Real OCR integration (Tesseract or Google Vision API)
- CMS Medicare Fee Schedule vectorized database
- Itemized bill line-by-line comparison table
- Auto-fax to hospital billing department via Lob API
- Insurance company appeal letter variant

## Acceptance Criteria
1. Scanner shows original bill vs fair market price BEFORE paywall
2. Payment must succeed before dispute letter generation
3. Dispute letter cites exact CPT codes and No Surprises Act sections

# MedBill Hacker — Project Overview

> **One-Line Pitch:** AI that forensically audits hospital bills for illegal overcharges and auto-generates legal dispute letters.

| Field | Value |
|-------|-------|
| **Status** | ✅ MVP Built |
| **Repo** | `e:\hermes\github_fleet\medbill-hacker` |
| **Price** | $49 flat fee |
| **Target MRR** | $24,500 (500 users/mo) |
| **Last Updated** | 2026-04-26 |

## Key Files
- `frontend/LandingPage.tsx` — Medical debt defense landing page
- `frontend/BillScanner.tsx` — OCR scanner showing upcoding errors vs fair market price
- `api/stripe_fee.ts` — $49 Stripe Checkout
- `api/generate_demand.ts` — RAG engine drafting hospital dispute letters

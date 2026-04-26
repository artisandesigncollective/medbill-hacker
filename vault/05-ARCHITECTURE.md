# MedBill Hacker — Architecture

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript |
| API | Next.js API Routes |
| Payments | Stripe Checkout ($49) |
| LLM | Claude 3.5 (CPT code analysis) |
| OCR | Tesseract / Google Vision (planned) |
| Data | CMS Medicare Fee Schedule (planned) |

## Data Flow
```
Upload Bill PDF → OCR Extract Line Items → Map CPT Codes → 
Query Medicare Rates by Zip → Calculate Overcharge → 
Show Comparison → $49 Stripe → Generate Dispute Letter PDF
```

## Env Vars
```
STRIPE_SECRET_KEY, NEXT_PUBLIC_BASE_URL, ANTHROPIC_API_KEY, GOOGLE_VISION_KEY (planned)
```

## Legal Citations in RAG Context
- No Surprises Act (P.L. 116-260, Division BB)
- CPT Code definitions (AMA)
- CMS Medicare Physician Fee Schedule (cms.gov)

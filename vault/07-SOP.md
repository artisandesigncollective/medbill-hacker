# MedBill Hacker — SOP

## SOP-1: Dev Setup
1. Clone repo, `npm install`, copy `.env.example` to `.env.local`
2. Set Stripe keys, start `npm run dev`

## SOP-2: Code Change Protocol
1. Make code changes
2. Update `vault/06-IMPLEMENTATION-LOG.md`
3. Update `vault/10-CHANGELOG.md`
4. Commit with `feat:` or `fix:` prefix

## SOP-3: Deployment
1. Connect to Vercel, set env vars, deploy `vercel --prod`
2. Verify Stripe URLs point to production domain

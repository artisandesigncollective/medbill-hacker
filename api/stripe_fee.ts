import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

/**
 * MedBill Hacker: Stripe Checkout
 * 
 * Target: Mass market consumers facing surprise medical bills.
 * Price Point: $49 flat fee. (Extremely low friction when facing a $5k hospital bill).
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const MEDBILL_FEE_CENTS = 4900; // $49.00

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { userEmail, hospitalName } = req.body;

    console.log(`[MedBill-Billing] 💳 Initiating $49 Audit Fee for ${userEmail}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'apple_pay', 'google_pay'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Forensic Bill Audit & Legal Dispute`,
              description: `Autonomous CPT code analysis and legal demand generation for ${hospitalName}.`,
            },
            unit_amount: MEDBILL_FEE_CENTS,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/scanner?canceled=true`,
      customer_email: userEmail,
      metadata: {
        service: 'MEDBILL_AUDIT',
        hospital: hospitalName
      }
    });

    console.log(`[MedBill-Billing] ✅ Stripe Session Created: ${session.id}`);

    return res.status(200).json({ url: session.url });

  } catch (error) {
    console.error("[MedBill-Billing] Stripe Checkout Failure:", error);
    return res.status(500).json({ error: 'Failed to initialize checkout.' });
  }
}

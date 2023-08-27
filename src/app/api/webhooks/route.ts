import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import Stripe from "stripe";

const endPointSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET as string;


export const POST = async (request: any, res: any) => {

    const headerList = headers();

    try {
        const rawBody = await request.text();
        const signature = headerList.get("stripe-signature");

        const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
            apiVersion: '2023-08-16'
        });

        let event: any;

        try {
            if (!signature || !endPointSecret) {
                return new Response("Webhook signature or endpoint secret is missing"), { status: 400 };
            }
            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                endPointSecret
            )
        } catch (error) {
            console.log('Webhook Signature Error==>', error);
            return new Response("Webhook signature / endpoint secret missing"), { status: 400 }
        }
        if (`checkout.session.completed` === event.type) {
            const session = event.data.object;

            //  @ts-ignore
            const customerData = await stripe.customers.retrieve(session.customer);

            //  @ts-ignore
            const userId = customerData.metadata.userId;

            await db.delete(cartTable).where(eq(cartTable.user_id, userId));


            const line_items = await stripe.checkout.sessions.listLineItems(event.data.object!.id);

            return new Response("Payment Confirmation Router Reciept");
        } else {
            res.setHeader("Allow", "POST");
        }

    } catch (error) {
        console.log(error);
        return;
    }
}


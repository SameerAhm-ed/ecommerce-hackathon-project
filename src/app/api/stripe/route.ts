import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const key: any = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;

const stripe = new Stripe(key, {
    apiVersion: '2023-08-16',

})

export const POST = async (request: NextRequest, response: NextResponse) => {

    const { userId } = auth();

    const body = await request.json();

    const customer = await stripe.customers.create({
        metadata: {
            userId: userId
        }
    })

    try {
        if (body.length > 0 && userId) {
            const session = await stripe.checkout.sessions.create({
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ["card"],
                billing_address_collection: 'auto',
                shipping_options: [{ shipping_rate: "shr_1NiQD9AIE67JHBsVG95FTyfm" }, { shipping_rate: "shr_1NiQCMAIE67JHBsVRbbMNwuV" }],
                invoice_creation: {
                    enabled: true,
                },
                line_items: body.map((item: any) => {
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                // images: item.image
                            },
                            unit_amount: item.price * 100, // dollar value return * 10
                        },
                        quantity: item.quantity,
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                            maximum: 10,
                        }

                    }
                }),
                customer: customer.id,
                success_url: `${request.headers.get("origin")}/success`,
                cancel_url: `${request.headers.get("origin")}/cart`
            });
            return NextResponse.json({ session }, { status: 200 })
        } else {
            return NextResponse.json({ message: 'Product data is missing to Stripe OR no User login' }, { status: 400 })
        }
    } catch (error: any) {
        console.log('Stripe Api Error ===>', error);
        return NextResponse.json(error.message)

    }



}   
"use client";

import { getStripePromise } from '@/lib/stripe';
import { Product } from '@/utils/ProductTypes';
import React from 'react'

interface IProps {
    products: Product[];
}



const StripeCheckoutButton = (props: IProps) => {

    const handleStripeCheckout = async () => {
        const stripe = await getStripePromise();

        const res = await fetch('/api/stripe', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: 'no-cache',
            body: JSON.stringify(props.products)
        });

        const data = await res.json();

        if (data.session) {
            stripe?.redirectToCheckout({
                sessionId: data.session.id
            })
        }
    }

    return (
        <div className='py-5'>
            <button onClick={handleStripeCheckout} className='bg-[#212121] text-white py-3 px-3 rounded-md'>
                Process to Checkout
            </button>
        </div>
    )
}

export default StripeCheckoutButton;
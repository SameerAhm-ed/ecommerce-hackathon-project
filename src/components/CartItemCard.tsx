"use client";
import { cartAction } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/store';
import { Product } from '@/utils/ProductTypes';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { urlForImage } from '../../sanity/lib/image';


interface Props {
    cartItem: Product
}

const CartItemCard = ({ cartItem }: Props) => {

    const [num, setNum] = useState(cartItem.quantity);
    const dispatch = useAppDispatch();

    const handleQuantity = async (newQty: number) => {
        const newPrice = cartItem.price * newQty;
        try {
            if (newQty) {
                const res = await fetch('/api/cart', {
                    method: 'PUT',
                    body: JSON.stringify({
                        product_id: cartItem._id,
                        quantity: newQty,
                        price: newPrice
                    })
                })
                if (!res.ok) {
                    throw new Error("Failed to Updated data");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCartItemDelete = async () => {
        await fetch(`/api/cart?product_id=${cartItem._id}`, {
            method: 'DELETE'
        });
    };

    const qunaitityIncrement = () => {
        toast.promise(handleQuantity(num + 1), {
            loading: 'Increment Quantity',
            success: 'Quantity Increment',
            error: 'Failed to Increment Quantity',
        });
        setNum(num + 1);
        dispatch(cartAction.addToCart({ product: cartItem, quantity: 1 }));
    }

    const quantityDecrement = () => {
        toast.promise(handleQuantity(num - 1), {
            loading: 'Decrement Quantity',
            success: 'Quantity Decrement',
            error: 'Failed to Decrement Quantity',
        });
        setNum(num - 1);
        dispatch(cartAction.decreamentCartProduct(cartItem._id as any));
    }

    const removeItem = () => {
        toast.promise(handleCartItemDelete(),{
            loading: 'Deleting Cart',
            success: 'Delete Cart Successfully',
            error: 'Failed to Cart Delete',
        });
        dispatch(cartAction.removeProduct(cartItem._id as any))
    }



    return (
        <div className='flex flex-col sm:flex-row items-center justify-center w-full px-5 py-7 gap-5 border-b border-gray-200'>
            <div className=''>
                <Image src={cartItem.image} alt={cartItem.name} width={250} height={250} className='rounded-md' />
            </div>
            <div className='flex flex-col justify-between items-start w-full'>
                <div className='flex justify-between items-center w-80 sm:w-full flex-initial'>
                    <h4>{cartItem.name}</h4>
                    <button onClick={removeItem}>
                        <Trash size={25} className='cursor-pointer' />
                    </button>
                </div>
                <h5 className='font-semibold my-2 text-gray-400'>{cartItem.subcat}</h5>
                <p className='flex flex-col gap-5 my-1 font-semibold text-base'>
                    Delivery Estimation
                    <span className='text-yellow-500'>5 Working Days</span>
                </p>
                <div className='flex justify-between items-center w-80 sm:w-full flex-initial'>
                    <div>${cartItem.price * cartItem.quantity}</div>
                    <div className='flex justify-center items-center gap-5 text-2xl font-bold mt-8'>
                        <p>Quantity:</p>
                        <button onClick={quantityDecrement} className='flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full'>
                            -
                        </button>
                        {num}
                        <button onClick={qunaitityIncrement} className='flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full'>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;
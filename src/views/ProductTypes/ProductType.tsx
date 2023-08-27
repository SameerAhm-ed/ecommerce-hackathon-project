import Image from 'next/image';
import React from 'react';

function ProductType() {

    return (
        <div className='py-16 px-2 space-y-5'>
            <div className='text-center py-5 space-y-3'>
                <p className="text-sm leading-4 tracking-wide font-bold Sora,sans-serif text-[#0062f5] [&:not(:first-child)]:mt-6">
                    PROMOTIONS
                </p>
                <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
                    Our Promotions Events
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 text-gray-800'>
                <div className='w-full flex flex-col items-center justify-between sm:flex-row  h-auto col-span-1 md:col-span-2 rounded-md px-12 bg-[#d6d6d8]'>
                    <div className='max-w-[13rem] py-8'>
                        <h4 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
                            GET UP TO 60%
                        </h4>
                        <p className="text-xl leading-7">
                            For the summer season
                        </p>
                    </div>
                    <div className='w-64'>
                        <Image src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"} alt="product 1" width={1000} height={1000} />
                    </div>
                </div>
                <div className='w-full row-span-1  md:row-span-2 flex flex-col items-center h-full rounded-md  bg-[#efe1c7]'>
                    <div className='p-4'>
                        <p>
                            Flex Sweatshirts
                        </p>
                        <p className='space-x-3 text-lg'>
                            <del>$100.00</del><b>$75.00</b>
                        </p>
                    </div>
                    <div className='w-64'>
                        <Image src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"} alt='Banner Image' width={1000} height={1000} />
                    </div>
                </div>
                <div className='w-full row-span-1 md:row-span-2 flex flex-col  items-center h-full rounded-md  bg-[#d7d7d9]'>
                    <div className='p-4'>
                        <p>
                            Flex Push Button Bomber
                        </p>
                        <p className='space-x-3 text-lg'>
                            <del>$225.00</del><b>$190.00</b>
                        </p>
                    </div>
                    <div className='w-64'>
                        <Image src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"} alt='Banner Image' width={1000} height={1000} />
                    </div>
                </div>
                <div className='py-9 text-white w-full rounded-md col-auto  md:col-span-2 bg-[#212121] flex flex-col justify-center items-center space-y-4'>
                    <h3 className='text-white font-semibold text-4xl'>
                        GET 30% Off
                    </h3>
                    <p>
                        USE PROMO CODE
                    </p>
                    <button className='py-1 px-6 text-lg bg-[#474747] w-72 rounded-md  tracking-[5px]'> DINEWEEKENDSALE </button>
                </div>
            </div>
        </div>
    )
}

export default ProductType;
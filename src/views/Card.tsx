
import { FC, useState } from "react";
import { oneProductType } from "@/utils/ProductTypes";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../../sanity/lib/client";
import PortableText from "react-portable-text";
import Link from "next/link";


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {

    return (
        <Link href={`/catalog/${singleProductData.slug.current}`}>
            <div className="max-w-sm min-w-[24rem] space-y-3 select-none">
                <div className=" w-full">
                    <Image src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt="Logo" width={500} height={500} />
                </div>
                <div className="space-y-1 text-gray-600 font-semibold text-lg select-none">
                    <h6>{singleProductData.title}</h6>
                    <p>${singleProductData.price}</p>
                </div>
            </div>
        </Link>

        // <div className="max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300">
        //     <div className="relative w-full">
        //         <div className="absolute top-0 inset-0 bg-gray-500 z-10">
        //             <Image src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt="Logo" width={500} height={500} />
        //         </div>
        //     </div>
        //     <div className="space-y-1 text-gray-600 font-semibold text-lg select-none">
        //         <h6>{singleProductData.title}</h6>
        //         {/* <PortableText className="text-sm font-normal" content={singleProductData.description} /> */}
        //         <p>${singleProductData.price}</p>
        //     </div>
        // </div>
    )
}

export default Card;
// import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";
import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { client } from "../../../../sanity/lib/client";
import { auth } from "@clerk/nextjs";
import { urlForImage } from "../../../../sanity/lib/image";
import { Product } from "@/utils/ProductTypes";

/// sanity kae liya
const getProduct = async (id:any) => {
    const query = `*[_type == "product" && _id =="${id}"]{
        _id,
        name,
        price,
        description,
        subcat,
        image,
    }`;
    const res = await client.fetch(query);
    return res;
}


// const getProductDetails = (id: number) => {
//     return products.filter((product) => product._id == id);
// }


const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
]

export default async function Page({ params }: { params: { id: number | any} }) {



    const result = await getProduct(params.id);
    const { userId: user_id } = auth();


    // const userId = "12234adfsadfsafsa";

    return (
        <div className="flex flex-wrap py-10 mt-16">
            {result.map((eachItem:Product) => (
                <div key={eachItem._id} className="flex justify-between gap-6">
                    {/* Left Side  */}
                    <div className="border">
                        <Image className="h-full" src={urlForImage(eachItem.image).url()} alt={eachItem.name} width={245} height={245}/>
                    </div>
                    {/* Right Side  */}
                    <div>
                        <div>
                            <h1 className="text-2xl">{eachItem.name}</h1>
                            <h2 className="text-base font-semibold text-gray-400">{eachItem.tagline}</h2>
                        </div>
                        <div>
                            <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>

                            <div className="flex gap-x-5">
                                {sizes.map((size, index) => (
                                    <div key={index} className="flex items-center justify-center w-6 h-6 mt-2 border rounded-full hover:shadow-xl">
                                        <span className="text-[11px] font-semibold text-center text-gray-600">{size}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Quantity  */}
                            <div className="items-center mt-6 gap-x-3">
                                <Quantity product={eachItem} num={1} userId={user_id} />
                            </div>

                        </div>
                    </div>

                </div>
            ))}
        </div>

    )
}



// export async function generateStaticParams() {
//     const query = `*[_type == "product"]{
//         slug{
//             current
//         }
//     }`;
//     const res = await client.fetch(query);

//     return res.map((product: { slug: { current: any; }; }) => ({
//         slug: product.slug.current
//     }))
// }
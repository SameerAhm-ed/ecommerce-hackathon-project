import { products } from "@/utils/mock";
import { ProductCard } from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";
import { client } from "../../../../sanity/lib/client";
import { Product } from "@/utils/ProductTypes";

const getProducts = async(category: string) => {
    const query = `*[_type=="product" && category=="${category}"]`;
    const res = await client.fetch(query);
    return res;

}


export default async function Page({ params }: { params: { slug: string } }) {
    const result = await getProducts(params.slug);

    return (
        <div className='flex justify-evenly flex-wrap mt-16 gap-y-5'>
            {result.length > 0 ? result.map((eachItem:Product) => (
                <ProductCard
                    key={eachItem._id}
                    name={eachItem.name}
                    price={eachItem.price}
                    image={eachItem.image as StaticImageData}
                    category={eachItem.category}
                    _id={eachItem._id}
                    tagline={eachItem.tagline}
                />
            )) : <p>No Products Found</p>}
        </div>
    )
}
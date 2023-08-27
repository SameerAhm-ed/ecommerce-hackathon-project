import { ProductCard } from "@/components/ProductCard";
import { BASE_PATH_FORAPI } from "@/components/shared/BaseUrl";
import Image, { StaticImageData } from "next/image";
import { Product } from '@/utils/ProductTypes';
import { client } from "../../../sanity/lib/client";


const getAllProducts = async () => {

    const res = await fetch(`${BASE_PATH_FORAPI}/api/products`, {
        method: 'GET'
    });

    return res.json();
}

// const getProducts = async() => {
//     const query = `*[_type=="product"][0]{
//         name,
//         price,
//         'image': image.asset->url,
//         category,
//         tagline,
//         _id
//     }`;
//     const res = await client.fetch(query);
//     return res;

// }

async function AllProducts() {

    const { data } = await getAllProducts();

    // const { data } = await getProducts();
    // console.log(data)

    return (
        <div>
            <div className='flex flex-wrap justify-between mt-16 gap-y-12'>
                {data?.map((eachItem: Product) => (
                    <ProductCard
                        key={eachItem._id}
                        name={eachItem.name}
                        price={eachItem.price}
                        image={eachItem.image as StaticImageData}
                        category={eachItem.category}
                        _id={eachItem._id}
                        id={eachItem._id}
                        tagline={eachItem.tagline}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllProducts;
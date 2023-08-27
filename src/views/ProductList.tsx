import p1 from '/public/p1.png';
import Image, { StaticImageData } from 'next/image';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/utils/mock';
import Link from 'next/link';

const ProductList = () => {


    return (
        <div className='flex justify-evenly  mt-16'>
            {products.slice(0, 3).map((eachItem) => (
                <ProductCard
                    key={eachItem._id}
                    name={eachItem.name}
                    price={eachItem.price}
                    image={eachItem.image}
                    category={eachItem.category}
                    _id={eachItem._id}
                    tagline={eachItem.tagline}
                />
            ))}
        </div>
    )
}

export default ProductList;
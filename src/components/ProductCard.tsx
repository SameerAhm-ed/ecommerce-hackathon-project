import Image from "next/image";
import { Product } from "@/utils/ProductTypes";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

export const ProductCard = ({
  name,
  price,
  image,
  category,
  _id,
}: Product) => {
  console.log("Product Image", image);
  return (
    <div className="w-[350px]">
      <Link href={`/products/${_id}`}>
        <Image
          src={urlForImage(image).url()}
          alt="Picture"
          width={300}
          height={300}
        />
        <h3 className="mt-3 text-lg font-bold">{name}</h3>
        <p className="text-lg font-bold">${price}</p>
        <p className="text-lg font-bold">
          Category :
          <span className="text-base font-normal capitalize">{category}</span>
        </p>
      </Link>
    </div>
  );
};

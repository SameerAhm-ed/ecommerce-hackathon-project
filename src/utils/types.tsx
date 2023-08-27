import Image, { StaticImageData } from 'next/image';

export type Product = {
    _id: number | any;
    name: string;
    tagline?: string;
    price: number;
    category: string;
    image: StaticImageData | string | any;
    totalPrice?: number;
    subcat?: string;
    userId?: string;
    quantity?: number;
}
import { StaticImageData } from "next/image";
import { Image } from "sanity";

export interface oneProductType {
    id?: string,
    title: string,
    image: Array<object | string>,
    productTypes: Array<object | string>,
    slug: object | any,
    _rev: string,
    _type: string,
    quantity: string,
    description: Array<object>,
    size: Array<object | string>,
    price: number,
}


export interface responseType {
    result: Array<oneProductType>
}

/// redux slice interface
export interface Product {
    id?:number;
    _id: number;
    name: string;
    price: number;
    totalPrice?: number;
    subcat?: string;
    image: any;
    userId?: number | string;
    quantity?: number | any;
    tagline:string;
    category:string;
}
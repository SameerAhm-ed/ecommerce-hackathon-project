"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { oneProductType } from "@/utils/ProductTypes";
import { FC, ReactNode } from "react";
import Card from "../Card";

// interface IProduct {
//     id?: string,
//     title: string,
//     image: Array<object | string>,
//     productTypes: Array<object | string>,
//     slug: object,
//     quantity: string,
//     description: Array<object | string>,
//     size: Array<object | string>,
//     price: string
// }

// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }: any) => {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div>
//             <h2> Single Item</h2>
//             {/* <Slider {...settings}>
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//             </Slider> */}
//         </div>
//         // <div className="grid">
//         //     {ProductData.slice(0, 3).map((eachItem: oneProductType, index: number) => (
//         //         <div key={index}>
//         //             <Card singleProductData={eachItem} />
//         //         </div>
//         //     ))}
//         // </div>
//     )
// }

// export default ProductCarousel;

export default class ProductCarousel extends Component<{ ProductData: Array<oneProductType> }> {

    render(): ReactNode {
        const settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.props.ProductData.map((eachItem: oneProductType, index: number) => (
                        <div key={index}>
                            <Card singleProductData={eachItem} />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}


// export default class ProductCarousel extends Component<{ ProductData: Array<oneProductType> }>{

//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };

//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }

// }



// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }: any) => {
//     let initialX: number;
//     let isDragging = false;
//     let tabBox: any;
//     const isBrowser = () => typeof window !== "undefined";

//     if (isBrowser()) {
//         tabBox = document.querySelector(".scrollGrab");
//     }

//     // Desktop functions
//     function mouseMoves(e: any) {
//         if (!isDragging) return;
//         if (tabBox) {
//             tabBox.scrollLeft -= e.movementX;
//         }
//     };
//     function mouseDown() {
//         console.log("moving orignal")
//         isDragging = true;
//     }
//     function mouseUp() {
//         isDragging = false
//     }

//     // mobile functions
//     function mouseMovesForMobile(e: any) {
//         if (!isDragging) return;
//         if (tabBox) {
//             var currentX = e.touches[0].clientX;
//             var movementX = currentX - initialX;
//             tabBox.scrollLeft -= movementX / 5;
//         }
//     };
//     function mouseDownForMobile(e: any) {
//         isDragging = true;
//         initialX = e.touches[0].clientX;
//     };


//     return (
//         <div
//             onMouseMove={mouseMoves}
//             onMouseDown={mouseDown}
//             onMouseUp={mouseUp}
//             className="select-none flex gap-4 overflow-x-hidden scrollGrab"
//             onTouchMove={mouseMovesForMobile}
//             onTouchStart={mouseDownForMobile}
//             onTouchEnd={mouseUp}>
//             {
//                 ProductData.map((item: oneProductType, index: number) => (
//                     <Card key={index + 4} singleProductData={item} />
//                 ))
//             }
//         </div>
//     )
// }

// export default ProductCarousel;

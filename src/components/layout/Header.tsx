"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import weblogo from '/public/Logo.jpg';
import Image from 'next/image';
import { Menu, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { navBarArray, NavbarType } from '@/utils/NavbarTypes';
import { Search } from 'lucide-react';
import { PanelTopOpen } from 'lucide-react';
import DropdownMenu from '@/views/subcatergory/DropdownMenu';
import { XCircle } from 'lucide-react';
// import MobileMenu from '@/views/subcatergory/MobileMenu';
import Expand from '@/views/subcatergory/Expand';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { UserButton } from '@clerk/nextjs';
import { fetchData } from '@/redux/features/cartSlice';


const Header = ({ userId }: { userId: string }) => {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [cartItem, setCartItem] = useState<number>(0);

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchData(userId))
    }, [dispatch, userId])

    const totalItem = useAppSelector((state) => state.cart.totalQuantity);


    return (
        <div>
            <div className='flex items-center justify-between py-6 space-x-12 backdrop-blur-lg'>
                <div className='flex-shrink-0 w-36'>
                    <Link href={"/"}>
                        <Image src={weblogo} alt='logo' width={500} height={500} />
                    </Link>
                </div>
                <div className='items-center justify-between hidden w-full lg:flex'>
                    <ul className='flex space-x-5 text-lg font-semibold ml-28'>
                        {navBarArray.map((eachItem: NavbarType, index: number) => (
                            <li key={eachItem.id} className='relative flex items-center px-3 py-1 rounded-sm gap-x-3 hover:bg-gray-100 group'>
                                <Link href={eachItem.href}>
                                    {eachItem.label}
                                </Link>
                                {/* {
                                    eachItem.isDropDown ?
                                        <div >
                                            <PanelTopOpen className='w-4 h-4 duration-300 -rotate-180 group-hover:rotate-0' />
                                        </div>
                                        :
                                        ""
                                }
                                {eachItem.isDropDown && <div className={`invisible group-hover:visible absolute left-0 top-8 p-2 py-2 px-6 border border-gray-200 text-sm font-light min-w-[7.8rem]`}>
                                    <DropdownMenu item={eachItem} />
                                </div>} */}


                            </li>
                        ))}
                        <div className='hidden'>
                            <Link href={'/cart'}>
                                <div className='relative flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full'>
                                    <div className='absolute w-5 h-5 top-1 left-5 py-1.5 flex justify-center items-center bg-red-600 text-base font-normal rounded-full '>
                                        <span className='text-white'>{totalItem ? totalItem : 0}</span>
                                    </div>

                                    <ShoppingCart className='h-7 w-7' />
                                </div>
                            </Link>
                        </div>
                    </ul>
                    <div className='flex items-center px-2 border rounded-md text-black-600'>
                        <Search />
                        <input type="text" className='flex-grow py-1 pl-3 pr-5 w-80 w-72 focus:border-white' placeholder='Search Bar' />
                    </div>
                    <span>
                        <UserButton afterSignOutUrl="/" />
                    </span>
                    <Link href={'/cart'}>
                        <div className='relative flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full'>
                            <div className='absolute w-5 h-5 top-1 left-5 py-1.5 flex justify-center items-center bg-red-600 text-base font-normal rounded-full '>
                                <span className='text-white'>{totalItem ? totalItem : 0}</span>
                            </div>

                            <ShoppingCart className='h-7 w-7' />
                        </div>
                    </Link>

                    {/* <div className='flex items-center justify-between px-8 py-6'>
                <Link href={"/"}>
                    <Image src={logo} alt='logo' />
                </Link>

                <ul className='flex gap-x-10'>
                    <li className='text-lg'>
                        <Link href={"/category/female"}>
                            Female
                        </Link>
                    </li>
                    <li className='text-lg'>
                        <Link href={"/category/male"}>
                            Male
                        </Link>
                    </li>
                    <li className='text-lg'>
                        <Link href={"/category/kids"}>
                            Kids
                        </Link>
                    </li>
                    <li className='text-lg'>
                        <Link href={"/products"}>
                            All Products
                        </Link>
                    </li>
                </ul>

                <div className='flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full'>
                    <ShoppingCart className='w-6 h-6' />
                </div>
            </div> */}
                </div>
                <div onClick={() => setNavbarOpen(!navbarOpen)}>
                    {
                        navbarOpen
                            ?
                            <div className='flex lg:hidden'>
                                <XCircle />
                            </div>
                            :
                            <div className='flex lg:hidden'>
                                <Menu />
                            </div>
                    }
                </div>
            </div>
            {
                navbarOpen && <MobileMenu />
            }
        </div>
    )
}

export default Header;

const MobileMenu = () => {
    const totalItem = useAppSelector((state) => state.cart.totalQuantity);
    return (
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                navBarArray.map((eachItem: NavbarType, index: number) => {
                    return (
                        <div key={index}>

                            <Expand eachItem={eachItem} />
                        </div>
                    )
                })

            }
            <div>
                <Link href={'/cart'}>
                    <div className='relative flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full'>
                        <div className='absolute w-5 h-5 top-1 left-5 py-1.5 flex justify-center items-center bg-red-600 text-base font-normal rounded-full '>
                            <span className='text-white'>{totalItem ? totalItem : 0}</span>
                        </div>

                        <ShoppingCart className='h-7 w-7' />
                    </div>
                </Link>
            </div>

        </div>
    )
}

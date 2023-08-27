import Image from 'next/image';
import checkImage from '../../../image/centerimg.png';
import React from 'react';

const Jewellery = () => {
  return (
    <div className='px-1'>
      {/* top  */}
      <div className='border-4 flex justify-start md:justify-end text-4xl md:text-5xl font-bold py-4'>
        <h6 className='max-w-2xl'>Unique and Authentic Vintage Designer Jewellery</h6>
      </div>
      {/* bottom  */}
      <div className='flex flex-col md:flex-row justify-between py-4 mt-2 gap-5'>
        {/* left  */}
        <div className='relative flex-1 border-4 gap-6 grid grid-cols-2 grid-rows-2'>
          <div className='absolute -z-50  inset-0'>
            <h6 className='text-5xl md:text-7xl lg:text-[7.3rem] text-slate-200 leading-[5.9rem] font-bold'>Different from others</h6>
          </div>
          <div className='max-w-[13rem] space-y-2 z-10'>
            <h6 className='font-semibold text-xl'>Using Good Quality Materials</h6>
            <p className='text-lg leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='max-w-[13rem] space-y-2 z-10'>
            <h6 className='font-semibold text-xl'>Using Good Quality Materials</h6>
            <p className='text-lg leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='max-w-[13rem] space-y-2 z-10'>
            <h6 className='font-semibold text-xl'>Using Good Quality Materials</h6>
            <p className='text-lg leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='max-w-[13rem] space-y-2 z-10'>
            <h6 className='font-semibold text-xl'>Using Good Quality Materials</h6>
            <p className='text-lg leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

        </div>
        {/* right  */}

        <div className='flex flex-col lg:flex-row flex-1'>
          <div className='w-full px-4 lg:px-0 lg:w-80'>
            <Image src={checkImage} alt='Materials' />
          </div>
          <div className='p-6'>
            <p style={{ wordSpacing: "0.8rem" }} className='h-[90%] lg:max-w-[15rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laboriosam tempore, atque quam quis aut doloremque? Suscipit at quaerat, inventore, nam, provident ratione quae cumque sapiente mollitia perferendis accusamus nemo!</p>
            <button className='text-white bg-gray-900 rounded-md py-2 px-6'>See All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jewellery;
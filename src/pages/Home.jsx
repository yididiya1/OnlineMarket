import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  
  
  return (
    <div className='px-24 py-12'>
      <div  className="grid grid-cols-4 gap-4 "
      >
        <div className='col-span-2 row-span-2'>
          <div className='relative'>
            <img src='images/main-banner.jpg'  alt='main-banner' className='rounded-md' />
            <div className='absolute top-14 left-10'>
              <h4 className='text-[#bc8436] text-sm font-[500]'>SUPERCHARGED FOR PROS.</h4>
              <p className='font-[600] text-[2.5rem] mt-1 mb-2'>Special Sale</p>
              <p className='text-sm mb-10 leading-6'>From $999.00 or $41.26/mo <br/> for 24 mo. Foontnote*</p>
              <Link className='bg-[#3b4149] text-xs px-6 py-3 rounded-full text-white'>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='relative  '>
              <img src='images/catbanner-01.jpg'  alt='banner' className='rounded-md '  />
              <div className='absolute top-8 left-6'>
                <h4 className='text-[#bc8436] text-[10px] font-[500]'>BEST SALE</h4>
                <p className='font-[600] text-[1.25rem] mt-1 mb-2'>Laptops Max</p>
                <p className='text-xs mb-10 leading-5'>From $1699.00 or <br/>$68.26/mo </p>
              </div>
            </div>
        </div>
        <div className=''>
        <div className='relative  '>
              <img src='images/catbanner-03.jpg'  alt='banner' className='rounded-md '  />
              <div className='absolute top-8 left-6'>
                <h4 className='text-[#bc8436] text-[10px] font-[500]'>BEST SALE</h4>
                <p className='font-[600] text-[1.25rem] mt-1 mb-2'>Laptops Max</p>
                <p className='text-xs mb-10 leading-5'>From $1699.00 or <br/>$68.26/mo </p>
              </div>
            </div>
        </div>
        <div className=''>
        <div className='relative '>
              <img src='images/catbanner-02.jpg'  alt='banner' className='rounded-md '  />
              <div className='absolute top-8 left-6'>
                <h4 className='text-[#bc8436] text-[10px] font-[500]'>BEST SALE</h4>
                <p className='font-[600] text-[1.25rem] mt-1 mb-2'>Laptops Max</p>
                <p className='text-xs mb-10 leading-5'>From $1699.00 or <br/>$68.26/mo </p>
              </div>
            </div>
        </div>
        <div className=''>
        <div className='relative '>
              <img src='images/catbanner-04.jpg'  alt='banner' className='rounded-md '  />
              <div className='absolute top-8 left-6'>
                <h4 className='text-[#bc8436] text-[10px] font-[500]'>BEST SALE</h4>
                <p className='font-[600] text-[1.25rem] mt-1 mb-2'>Laptops Max</p>
                <p className='text-xs mb-10 leading-5'>From $1699.00 or <br/>$68.26/mo </p>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Home
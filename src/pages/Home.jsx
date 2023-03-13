import React from 'react'
import { Link } from 'react-router-dom'
import ServiceItem from '../components/serviceitem/ServiceItem'
import SmallerBanner from '../components/smallbanner/SmallerBanner'


const Home = () => {
  
  
  return (
    <div className='py-12'>
      <div  className="px-24 grid grid-cols-4 gap-4 mb-12 "
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
          <SmallerBanner title={'Laptops Max'} image={'images/catbanner-01.jpg'} offer={'BEST SALE'} 
          desc={`From $1699.00 or \n $68.26/mo.` }/>
        </div>
        <div className=''>
          <SmallerBanner title={'Buy IPAD Air'} image={'images/catbanner-03.jpg'} offer={'NEW ARRIVAL'}  desc={`From $599.00 or \n $38.26/mo.` }/>
        </div>
        <div className=''>
          <SmallerBanner title={'Smartwatch 7'} image={'images/catbanner-02.jpg'} offer={'15% OFF'}  desc={`Shop the latest band \n styles and colors.` }/>
        </div>
        <div className=''>
          <SmallerBanner title={'AirPods Max'} image={'images/catbanner-04.jpg'} offer={'FREE ENGRAVING'}  desc={`High-fidelity playback & \n ultra-low distortion` }/>
        </div>
      </div>
      <div className='bg-[#F4F5F3] flex px-24 py-16'>
         <ServiceItem title={'Free Shipping'}  desc={'From all Orders over $100'} image={'/images/service.png'}  />
         <ServiceItem title={'Free Shipping'}  desc={'From all Orders over $100'} image={'/images/service.png'}  />
         <ServiceItem title={'Free Shipping'}  desc={'From all Orders over $100'} image={'/images/service.png'}  />
         <ServiceItem title={'Free Shipping'}  desc={'From all Orders over $100'} image={'/images/service.png'}  />
         <ServiceItem title={'Free Shipping'}  desc={'From all Orders over $100'} image={'/images/service.png'}  />
     
      </div>
    </div>

  )
}

export default Home
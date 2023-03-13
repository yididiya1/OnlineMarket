import React from 'react'
import QuickLink from './quicklinks/QuickLink'
import { BsTwitter, BsFacebook, BsPinterest, BsInstagram, BsYoutube } from 'react-icons/bs'
import GooglePlay from '../assets/images/googleplay.jpg'
import AppStore from '../assets/images/appstore.jpg'
import Payments from '../assets/images/payments.png'
import {TbBrandTelegram} from 'react-icons/tb'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#3b4149] flex px-40 justify-between py-14 border-b-2 border-gray-600'>
        <div className='flex-1 flex items-center gap-x-2 justify-center'>
          <TbBrandTelegram  color='#fff' size={30} />
          <p className='text-white text-xl'>Sign Up For Newsletter</p>
        </div>
        <div className="flex-1  ">
          <div className='w-full flex gap-x-4 justify-center'>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=" rounded-md w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe
            </button>
          </div>

        </div>


      </footer>
      <footer className='bg-[#3b4149] flex px-24 justify-between pt-12 pb-16'>
        <div>
          <p className='text-white mb-4'>Contact Us</p>
          <div>
            <p className='text-white text-xs font-[300] leading-5 '>Demo Store <br /> No. 1259, Freedom, NewYork 11111 <br /> United States</p>
            <p className='text-white text-xs font-[300] my-4'>+91-3245694068</p>
            <p className='text-white text-xs font-[300]'>Demo@ExampleDemo.com</p>
            <div className='flex gap-1 mt-6'>
              <BsTwitter className='bg-[#4E5C6A] p-[11px] rounded-full' size={36} color={'#fff'} />
              <BsFacebook className='bg-[#4E5C6A] p-[11px] rounded-full' size={36} color={'#fff'} />
              <BsPinterest className='bg-[#4E5C6A] p-[11px] rounded-full' size={36} color={'#fff'} />
              <BsInstagram className='bg-[#4E5C6A] p-[11px] rounded-full' size={36} color={'#fff'} />
              <BsYoutube className='bg-[#4E5C6A] p-[11px] rounded-full' size={36} color={'#fff'} />
            </div>
          </div>
        </div>
        <QuickLink items={['Privacy Policy', 'Refund Policy', 'Shopping Policy', 'Terms of Service', 'Blogs']} title={'Information'} links={['/about', '/contact', '/about', '/contact', '/about']} />
        <QuickLink items={['Privacy Policy', 'Refund Policy', 'Shopping Policy', 'Terms of Service', 'Blogs']} title={'Information'} links={['/about', '/contact', '/about', '/contact', '/about']} />
        <QuickLink items={['Privacy Policy', 'Refund Policy', 'Shopping Policy', 'Terms of Service', 'Blogs']} title={'Information'} links={['/about', '/contact', '/about', '/contact', '/about']} />
        <div>
          <p className='text-white mb-4'>Our App</p>
          <p className='text-white text-xs font-[300] leading-5 mb-3 '>Download Our App and get extra 15% Discount on <br />your first Order.!</p>
          <div className='flex'>
            <div className='w-28 p-1 bg-white rounded-[3px] mr-1'>
              <img src={GooglePlay} className='' alt='googleplay' />
            </div>
            <div className='w-28 p-1 bg-white rounded-[3px]'>
              <img src={AppStore} className='' alt='appstore' />
            </div>
          </div>

        </div>
      </footer>
      <footer className='px-24 bg-[#3b4149] border-t-2 border-gray-600 py-4 flex items-center justify-between'>
        <p className='text-xs text-white'>&copy; 2022. Digitic Powered by Shopify</p>
        <div className='w-64'>
          <img src={Payments} alt="Payments" />
        </div>

      </footer>
    </>
  )
}

export default Footer
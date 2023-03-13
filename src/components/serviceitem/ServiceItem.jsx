import React from 'react'

const ServiceItem = ({image,title,desc}) => {
  return (
    <div className='flex-1 flex items-center justify-center'>
        <img src={image} alt="Service" className='h-min w-8 mr-5'/>
        <div>
            <p className='text-sm font-[600] mb-[2px]'>{title}</p>
            <p className='text-xs text-[#656565]'>{desc}</p>
        </div>
    </div>
  )
}

export default ServiceItem
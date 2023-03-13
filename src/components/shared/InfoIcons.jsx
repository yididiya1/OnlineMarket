import React from 'react'

const InfoIcons = ({icon,option1, option2}) => {
  return (
    <div className='flex  justify-center items-center mx-4 '>
        <div>
            <img src={icon} className='w-8 h-8'/>
        </div>
        <div className='ml-4'>
            <p className='text-white text-xs'>{option1}</p>
            <p className='text-white text-xs'>{option2}</p>
        </div>
    </div>
  )
}

export default InfoIcons
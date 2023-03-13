import React from 'react'

function NewlineText({text}) {
    return  text.split('\n').map(str => <p className='text-xs mb-1'>{str}</p>);
}

const SmallerBanner = ({offer,title,desc,image}) => {
  return (
    <div className='relative'>
        <img src={image}  alt='banner' className='rounded-md '  />
        <div className='absolute top-8 left-6'>
            <h4 className='text-[#bc8436] text-[10px] font-[500]'>{offer}</h4>
            <p className='font-[600] text-[1.25rem] mt-1 mb-2'>{title}</p>
            <NewlineText  text={desc}/>
        </div>
    </div>
  )
}

export default SmallerBanner
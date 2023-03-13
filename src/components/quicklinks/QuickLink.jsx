import React from 'react'
import { Link } from 'react-router-dom'

const QuickLink = ({title,items,links}) => {
  return (
    <div>
        <p className='text-white mb-2'>{title}</p>
        <div className='flex flex-col'>
            {
                items.map((item,index)=>{
                    return <Link to={links[index]} className='text-white text-xs my-2 font-[300]'>{item}</Link>
                })
            }
        </div>
       
    </div>
  )
}

export default QuickLink
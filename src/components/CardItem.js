import React from 'react'
import { NavLink } from 'react-router-dom';


const CardItem = ({data}) => {
    const {title,price,image,rating}=data 
    const {rate}=rating

  return (
    <NavLink className="link" to={`/products/${data.id}`} exact>
    <div className=' flex flex-col m-4 h-64 w-64 bg-white shadow rounded-md'>
      <img src={image} className='h-32 p-1  w-60 rounded' alt={title}/>
      <div className='flex flex-col ml-2'>
        <p className='text-black font-bold text-sm'> Title: {title}</p>
        <span className='text-black text-base'>Price: {price}</span>
        <span className='text-black text-base'>Rating: {rate}</span>
      </div>
    </div>
    </NavLink>
  )
}

export default CardItem

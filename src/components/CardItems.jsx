import React from 'react'

const CardItems = ({prod,index}) => {
    const{id, name, imageUrl, price}=prod;
  return (
    <div key={index} className=' relative flex flex-col w-[300px] h-[400px] items-center justify-between  group gap-y-2 border  border-zinc-200 rounded-md p-24'>
     <img src={imageUrl} width={200}  className=' group-hover:-translate-y-2 transition-all duration-500'/>

  <div className='absolute bottom-5 left-5'>
<h1 className='text-zinc-700 text-sm'>{name}</h1>
<span className='text-pink-500 text-sm'>${price}</span>

  </div>
    </div>
  )
}

export default CardItems
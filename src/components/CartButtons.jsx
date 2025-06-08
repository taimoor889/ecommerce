import React from 'react'
import { useCart } from '../context/CardContext'


const CartButtons = ({prod}) => {
  const  {addToCard}=useCart();
  return (
    <div className='absolute top-5 right-5'>
 <button onClick={()=>addToCard(prod)} type ="button" className='text-xs text-white bg-zinc-400 border rounded-md px-2 py-1 hover:bg-zinc-500 cursor-pointer transition-colors duration-200'>+Add Item</button>

    </div>
  )
}

export default CartButtons
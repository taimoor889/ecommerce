import React from 'react'
import { useCart } from '../context/CardContext'


const CartButtons = ({prod}) => {
  const  {addToCard,cardItems,increaseQuantity,decreaseQuantity}=useCart();
  const itemInCart=cardItems.find((item)=>item.id===prod.id);
  return (
    <div className='absolute top-5 right-5'>
        {!itemInCart ?( <button onClick={()=>addToCard(prod)} type ="button" className='text-xs text-white bg-zinc-400 border rounded-md px-2 py-1 hover:bg-zinc-500 cursor-pointer transition-colors duration-200'>+Add Item</button>)
        :  <div className="flex items-center gap-2">
              <button onClick={() => decreaseQuantity(prod.id)} className="px-2 bg-gray-300 rounded">-</button>
              <span>{itemInCart.quantity}</span>
              <button onClick={() => increaseQuantity(prod.id)} className="px-2 bg-gray-300 rounded">+</button>
            </div>
         }


    </div>
  )
}

export default CartButtons
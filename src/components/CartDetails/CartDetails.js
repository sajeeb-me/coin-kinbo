import React from 'react';
import { XIcon } from '@heroicons/react/outline'
import { removeItem, minusItem, addToLocalStorage } from '../../utilities/localStorageDb';

const CartDetails = ({ coin }) => {
    const { id, market_cap_rank, image, name, current_price, quantity } = coin;
    const total = current_price * quantity;

    return (
        <div>
            <section className='grid grid-cols-6 items-center py-3 border rounded-lg my-3 pl-2 hover:bg-slate-800'>
                <div className='flex items-center justify-around'>
                    <p>{market_cap_rank}</p>
                    <img className='h-6 w-6' src={image} alt="" />
                </div>
                <p className='text-left'>{name}</p>
                <p className='text-right'>${(current_price).toFixed(2)}</p>
                <div className='flex items-center pl-10'>
                    <button onClick={() => minusItem(id)} className='text-4xl hover:text-rose-500'>-</button>
                    <p className='border px-4 py-1 rounded-md bg-slate-800 mx-3 mt-1'>{quantity}</p>
                    <button onClick={() => addToLocalStorage(id)} className='text-3xl hover:text-rose-500'>+</button>
                </div>
                <p className='text-right font-semibold'>${(total).toFixed(2)}</p>
                <p className='flex justify-center'><button onClick={() => removeItem(id)} className='border border-rose-500 text-rose-500 rounded-full p-1 hover:bg-rose-500 hover:text-white duration-300 ease-in'><XIcon className="h-4 w-4" /></button></p>
            </section>
        </div>
    );
};

export default CartDetails;
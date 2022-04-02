import React from 'react';

const CartDetails = ({ coin }) => {
    // console.log(coin)
    const { market_cap_rank, image, name, current_price, quantity } = coin;
    const total = current_price * quantity;
    return (
        <div>
            <section className='grid grid-cols-5 items-center py-3 border-b'>
                <div className='flex items-center justify-around'>
                    <p>{market_cap_rank}</p>
                    <img className='h-6 w-6' src={image} alt="" />
                </div>
                <p className='text-left'>{name}</p>
                <p className='text-right'>${(current_price).toFixed(2)}</p>
                <div className='flex justify-center'>
                    <button>-</button>
                    <p>{quantity}</p>
                    <button>+</button>
                </div>
                <p className='text-right'>${(total).toFixed(2)}</p>
            </section>
        </div>
    );
};

export default CartDetails;
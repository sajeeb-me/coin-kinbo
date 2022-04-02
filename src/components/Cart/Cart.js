import React from 'react';
import CartDetails from '../CartDetails/CartDetails';

const Cart = ({ crypto }) => {
    let quantity = 0;
    crypto.forEach(cryp => {
        quantity = quantity + cryp.quantity;
    })
    return (
        <div>
            <h1>This is cart: {crypto.length} = {quantity}</h1>
            <div className='grid grid-cols-2'>
                <div className='p-5'>
                    {
                        crypto.map(coin => <CartDetails key={coin.id} coin={coin}></CartDetails>)
                    }
                </div>
                <div>
                    <h1>summary</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;
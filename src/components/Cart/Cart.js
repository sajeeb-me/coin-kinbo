import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import Receipt from '../Receipt/Receipt';
import './Cart.css'

const Cart = ({ crypto }) => {
    return (
        <div className='px-10'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 m-5'>
                    <h1 className='text-5xl font-semibold mb-4 opacity-20'>Order Summary</h1>
                    <div className='container p-5 border rounded-xl h-[420px] overflow-y-auto'>
                        <div className='grid grid-cols-6 items-center py-2 bg-slate-800 border border-transparent rounded-t-lg pl-2 font-semibold'>
                            <p className='w-2/4'>#</p>
                            <p className='text-left'>Name</p>
                            <p className='text-right'>Price</p>
                            <p className='text-right'>Quantity</p>
                            <p className='text-right'>Total</p>
                            <p></p>
                        </div>
                        {
                            crypto.map(coin => <CartDetails key={coin.id} coin={coin}></CartDetails>)
                        }
                    </div>
                </div>
                <div>
                    <div className='m-5'>
                        <h1 className='text-5xl font-semibold mb-4 opacity-20'>Receipt</h1>
                        <div className='p-5 border border-transparent bg-slate-800 rounded-xl h-[420px] hover:border-white'>
                            {
                                <Receipt crypto={crypto}></Receipt>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
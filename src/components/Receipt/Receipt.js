import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { deleteCart } from '../../utilities/localStorageDb';

const Receipt = ({ crypto }) => {
    let quantity = 0;
    let totalPrice = 0;
    crypto.forEach(cryp => {
        quantity = quantity + cryp.quantity;
        totalPrice = totalPrice + cryp.current_price * cryp.quantity;
    })
    const tax = totalPrice * 0.05;
    const serviceCharge = totalPrice * 0.02;
    const subTotal = totalPrice + tax + serviceCharge;
    const discount = totalPrice * 0.03;
    const grandTotal = subTotal - discount;
    return (
        <div>
            <section className='flex justify-between font-semibold'>
                <p>Selected Coin : {crypto.length}</p>
                <p>Quantity : {quantity}</p>
            </section>
            <section className='my-6'>
                <div className='flex justify-between'>
                    <div className='text-left'>
                        <p>Total Price :</p>
                        <p className='my-1'>TAX :</p>
                        <p>Service Charge :</p>
                    </div>
                    <div className='text-right'>
                        <p>${(totalPrice).toFixed(2)}</p>
                        <p className='my-1'>${(tax).toFixed(2)}</p>
                        <p>${(serviceCharge).toFixed(2)}</p>
                    </div>
                </div>
                <div className='flex justify-between border-y py-2 my-2'>
                    <div className='text-left'>
                        <p>Sub Total :</p>
                        <p>Discount <small>(3%)</small> :</p>
                    </div>
                    <div className='text-right'>
                        <p>${(subTotal).toFixed(2)}</p>
                        <p>${(discount).toFixed(2)}</p>
                    </div>
                </div>
                <div className='flex justify-between text-lg'>
                    <div className='text-left'>
                        <p className='font-semibold'>Grand Total :</p>
                    </div>
                    <div className='text-right'>
                        <p className='font-semibold'>${(grandTotal).toFixed(2)}</p>
                    </div>
                </div>
            </section>
            <section>
                <button className='w-full border border-green-500 py-3 px-4 rounded-md font-semibold hover:bg-green-500 my-2 duration-300 ease-in'>
                    <p>Proceed to Pay</p>
                </button>
                <button onClick={deleteCart} className='w-full border border-rose-500 py-3 px-4 rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-rose-500 my-1 duration-300 ease-in'>
                    <p>Delete Cart</p>
                    <TrashIcon className='w-5 h-5'></TrashIcon>
                </button>
            </section>
        </div>
    );
};

export default Receipt;
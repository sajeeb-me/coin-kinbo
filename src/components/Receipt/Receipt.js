import React from 'react';

const Receipt = ({ crypto }) => {
    let quantity = 0;
    let totalPrice = 0;
    crypto.forEach(cryp => {
        quantity = quantity + cryp.quantity;
        totalPrice = totalPrice + cryp.current_price * cryp.quantity;
        // console.log(cryp)
    })
    const tax = totalPrice * 0.05;
    const serviceCharge = totalPrice * 0.02;
    const subTotal = totalPrice + tax + serviceCharge;
    const discount = totalPrice * 0.03;
    const grandTotal = subTotal - discount;
    return (
        <div>
            <div className='flex justify-between'>
                <p>Selected Coin : {crypto.length}</p>
                <p>Quantity : {quantity}</p>
            </div>
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
                <div className='flex justify-between'>
                    <div className='text-left'>
                        <p className='font-semibold'>Grand Total :</p>
                    </div>
                    <div className='text-right'>
                        <p className='font-semibold'>${(grandTotal).toFixed(2)}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Receipt;
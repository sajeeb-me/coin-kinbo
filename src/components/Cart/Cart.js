import React from 'react';

const Cart = ({ crypto }) => {
    return (
        <div>
            <h1>This is cart: {crypto.length}</h1>
        </div>
    );
};

export default Cart;
import React from 'react';

const Coin = ({ coin }) => {
    const { name, symbol, image, current_price, price_change_24h, total_volume, market_cap } = coin
    return (
        <div>
            <table class="table-auto">
                {/* <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>24h Volume</th>
                        <th>Market Cap</th>
                        <th>Buy now</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr className='grid grid-cols-6 border w-[1000px]'>
                        <td>{name}</td>
                        <td>{current_price}</td>
                        <td>{price_change_24h}</td>
                        <td>{total_volume}</td>
                        <td>{market_cap}</td>
                        <td><button>Buy now</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Coin;
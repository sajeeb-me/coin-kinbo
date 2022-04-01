import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [coins])
    return (
        <div className='min-h-[90vh]' style={{ backgroundColor: 'black' }}>
            <div>
                <h1 className='text-3xl font-semibold'>Buy <span className='text-rose-500'>Crypto</span>Currency from Us !</h1>
                <div className='px-[100px]'>
                    <thead>
                        <tr className='grid grid-cols-6 border w-[1000px]'>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h Change</th>
                            <th>24h Volume</th>
                            <th>Market Cap</th>
                            <th>Buy now</th>
                        </tr>
                    </thead>
                </div>
                <div className='px-[100px]'>
                    {
                        coins.map(coin => <Coin key={coin.id} coin={coin}></Coin>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coins;
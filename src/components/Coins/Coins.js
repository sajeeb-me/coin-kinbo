import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = ({ addToCart }) => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [coins])
    return (
        <div className='min-h-[90vh]'>
            <div>
                <h1 className='text-3xl font-semibold'>Buy <span className='text-rose-500'>Crypto</span>Currency from Us !</h1>
                <p className='my-3 opacity-50'>Top trusted Crypto Buying Platform since 2002!</p>
                <section className='mt-5 mx-[20px]'>
                    <div className='grid grid-cols-8 py-3 font-semibold text-sm bg-slate-800 rounded-t-lg sticky top-[55px] bg-opacity-80'>
                        <p className='w-2/4'>#</p>
                        <p className=' col-span-2 text-left'>Name</p>
                        <p className='text-right'>Price</p>
                        <p className=''>24h Change</p>
                        <p className=''>24h Volume</p>
                        <p className=''>Market Cap</p>
                        <p className=''></p>
                    </div>
                    <div className='text-lg'>
                        {
                            coins.map(coin => <Coin key={coin.id} coin={coin} addToCart={addToCart}></Coin>)
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Coins;
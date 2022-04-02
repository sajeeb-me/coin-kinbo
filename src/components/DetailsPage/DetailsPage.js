import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/solid'


const DetailsPage = ({ addToCart }) => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [coin, id])

    return (
        <div className='text-left px-[100px]'>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='font-mono bg-slate-800 p-1 rounded-sm'>Rank#{coin.market_cap_rank}</p>
                    <div className='flex gap-2 my-3'>
                        <img src={coin.image?.thumb} alt="" />
                        <p className='text-xl font-semibold'>{coin.name} ({coin.symbol})</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-4xl font-semibold'>${(coin.market_data?.current_price?.usd)?.toLocaleString("en-US")}</p>
                        <p className={`flex justify-center items-center ${coin.market_data?.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-700'} font-semibold`}>{coin.market_data?.price_change_percentage_24h >= 0 ? <ArrowSmUpIcon className="h-5 w-5 text-green-500" /> : <ArrowSmDownIcon className="h-5 w-5 text-red-500" />}{(coin.market_data?.price_change_percentage_24h)?.toFixed(2)}%</p>
                    </div>
                    <div className='flex gap-3 my-1 font-thin'>
                        <p><small>24h High: ${(coin.market_data?.high_24h?.usd)?.toLocaleString("en-US")}</small></p>
                        <p><small>24h Low: ${(coin.market_data?.low_24h?.usd)?.toLocaleString("en-US")}</small></p>
                    </div>
                    <button onClick={() => addToCart(coin)} className='text-base border border-rose-500 rounded-md py-2 px-10 hover:bg-rose-500 my-3'>Buy now</button>
                </div>
                <div>
                    <h2>Info: </h2>
                    <p>Market Cap : <span className='font-medium'>${(coin.market_data?.market_cap?.usd)?.toLocaleString("en-US")}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
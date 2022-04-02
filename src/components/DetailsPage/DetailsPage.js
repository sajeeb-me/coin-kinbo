import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowSmUpIcon } from '@heroicons/react/solid'


const DetailsPage = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => { }, [])
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => res.json())
        .then(data => setCoin(data))
    return (
        <div className='text-left px-[100px]'>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='font-mono bg-slate-800 p-1 rounded-sm'>Rank#{coin.market_cap_rank}</p>
                    <div className='flex gap-2'>
                        <img src={coin.image?.thumb} alt="" />
                        <p className='text-xl font-semibold'>{coin.name} ({coin.symbol})</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-3xl font-semibold'>${coin.market_data?.current_price?.usd}</p>
                        <p className='flex justify-center'><ArrowSmUpIcon className="h-5 w-5 text-green-500"/>{(coin.market_data?.price_change_percentage_24h)?.toFixed(2)}%</p>
                    </div>
                </div>
                <div>
                    <h2>Info: </h2>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                    <p>Rank: {coin.market_cap_rank}</p>
                    <div>
                        <img src={coin.image.thumb} alt="" />
                        <p>{coin.name}({coin.symbol})</p>
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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ addToCart }) => {
    const [searchedText, setSearchedText] = useState('');
    const [coin, setCoin] = useState({});

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${searchedText}`)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [searchedText])

    const getInput = (e) => {
        setSearchedText(e.target.value);
    }

    return (
        <div>
            <section className='my-10'>
                <div><input onChange={getInput} className='border border-rose-500 h-[60px] w-[500px] bg-transparent rounded-full p-5' type="text" placeholder='search coin name here' /></div>
            </section>
            <section className='mt-5 mx-[20px]'>
                <div className='grid grid-cols-8 py-3 font-semibold text-sm bg-slate-800 rounded-t-lg sticky top-[55px] pr-5'>
                    <p className='w-2/4'>#</p>
                    <p className=' col-span-2 text-left'>Name</p>
                    <p className='text-right'>Price</p>
                    <p className=''>24h Change</p>
                    <p className=''>24h Volume</p>
                    <p className=''>Market Cap</p>
                    <p className=''></p>
                </div>
                {coin.name ? <div className='text-lg'>
                    <div className='grid grid-cols-8 py-6 hover:bg-slate-800 items-center pr-5'>
                        <div className='flex items-center justify-around'>
                            <p className='text-left'>{coin.market_cap_rank}</p>
                            <img className='w-7 h-7' src={coin.image?.small} alt="" />
                        </div>
                        <Link className='col-span-2' to={`/details/${coin.id}`}>
                            <p className='text-left font-semibold'>{coin.name} <small className='font-thin'>({coin.symbol}/usdt)</small></p>
                        </Link>
                        <p className='text-right'>${(coin.market_data?.current_price?.usd)?.toLocaleString("en-US")}</p>
                        <p className={`${coin.market_data?.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-700'} font-semibold`}>{(coin.market_data?.price_change_percentage_24h)?.toFixed(2)}%</p>
                        <p>${(coin.market_data?.total_volume?.usd)?.toLocaleString("en-US")}</p>
                        <p>${((coin.market_data?.market_cap?.usd)?.toLocaleString("en-US"))}</p>
                        <div className='flex justify-center items-center gap-2'>
                            <Link to={`/details/${searchedText}`} className='text-base text-rose-500 hover:underline'>Details</Link>
                            <button onClick={() => addToCart(coin)} className='text-base border border-green-500 rounded-md py-1 px-2 hover:bg-green-500 duration-300 ease-in'>Add to cart</button>
                        </div>
                    </div>
                </div> : ''}
            </section>
        </div>
    );
};

export default Search;


{/* <div className='h-[90vh] flex items-center justify-center'>
    <div>
        <h1 className='text-5xl font-bold'>Our Search Feature is Coming Soon..!</h1>
    </div>
</div> */}
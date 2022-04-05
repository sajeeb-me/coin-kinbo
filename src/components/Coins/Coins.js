import { Link } from 'react-router-dom';
import useCoins from '../../hooks/useCoins';
import Coin from '../Coin/Coin';
import { ArrowSmRightIcon } from '@heroicons/react/solid'

const Coins = ({ addToCart }) => {
    const [coins] = useCoins()
    return (
        <div className='min-h-[90vh]'>
            <div>
                <h1 className='text-3xl font-semibold'>Buy <span className='text-rose-500'>Crypto</span>Currency from Us !</h1>
                <p className='my-3 opacity-50 font-light'>Top trusted Crypto Buying Platform since 2002!</p>
                <section className='mt-5 mx-[20px]'>
                    <div className='grid grid-cols-8 py-3 font-semibold text-sm bg-slate-800 rounded-t-lg sticky top-[55px] bg-opacity-80'>
                        <p className='w-2/4'>#</p>
                        <p className=' col-span-2 text-left'>Name</p>
                        <p className='text-right'>Price</p>
                        <p className=''>24h Change</p>
                        <p className=''>24h Volume</p>
                        <p className=''>Market Cap</p>
                        <p className=''><Link to='/search' className='flex justify-center items-center text-red-300 hover:text-red-500 duration-300 ease-in'>Search Coins <ArrowSmRightIcon className="h-5 w-5 " /></Link></p>
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
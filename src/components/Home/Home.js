import React from 'react';
import { useNavigate } from 'react-router-dom';
import Video from '../../background/background.mp4'



const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center h-[90vh]'>
            <video autoPlay loop muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-100'
                }}
            >
                <source src={Video} type='video/mp4' />
            </video>
            <div>

                <h1 className='text-5xl font-bold'>Welcome to Coin<span className='text-rose-500'>Kinbo</span></h1>
                <button onClick={() => navigate('/coins')} className='border border-rose-500 py-2 px-4 rounded-md font-semibold hover:bg-rose-500 my-4'>Explore Coins</button>
            </div>
        </div >
    );
};

export default Home;
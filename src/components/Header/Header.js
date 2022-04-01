import React from 'react';
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/outline'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex items-center justify-between px-[100px] py-3' style={{ backgroundColor: 'black' }}>
            <div className='text-2xl font-semibold'>
                <Link to='/'><h2>Coin<span className='text-rose-500'>Kinbo</span></h2></Link>
            </div>
            <div className='flex gap-5'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/search'>Search</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
            </div>
            <div className='flex items-center gap-2'>
                <Link to='/'><ShoppingBagIcon className="h-7 w-7" /></Link>
                <Link to='/'><UserCircleIcon className="h-7 w-7" /></Link>
            </div>
        </nav>
    );
};

export default Header;
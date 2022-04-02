import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Cart from './components/Cart/Cart';

export const PathContext = React.createContext();

// bg-slate-800
function App() {
  const { pathname } = useLocation()
  const path = pathname;

  const [crypto, setCrypto] = useState([]);

  let newCart = [];
  const addToCart = (selectedCoin) => {
    newCart = [...crypto, selectedCoin];
    setCrypto(newCart)
  }

  return (
    <PathContext.Provider value={path}>
      <div className='App text-white min-h-[100vh]' style={pathname.includes('/home') || pathname.length <= 1 ? { backgroundColor: 'transparent' } : { backgroundColor: '#0f172a' }}>
        <Header crypto={crypto} />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/coins' element={<Coins addToCart={addToCart}></Coins>} />
          <Route path='/details/:id' element={<DetailsPage addToCart={addToCart}></DetailsPage>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='*' element={<PageNotFound></PageNotFound>} />
        </Routes>
      </div>
    </PathContext.Provider>
  );
}

export default App;

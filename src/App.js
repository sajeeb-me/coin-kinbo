import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export const PathContext = React.createContext();

// bg-slate-800
function App() {
  const { pathname } = useLocation()
  const path = pathname;
  return (
    <PathContext.Provider value={path}>
      <div className='App text-white min-h-[100vh]' style={pathname.includes('/home') ? { backgroundColor: 'transparent' } : { backgroundColor: '#0f172a' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/coins' element={<Coins></Coins>} />
        </Routes>
      </div>
    </PathContext.Provider>
  );
}

export default App;

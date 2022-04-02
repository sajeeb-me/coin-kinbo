import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const PathContext = React.createContext();

// bg-slate-800
function App() {
  const { pathname } = useLocation()
  const path = pathname;
  return (
    <PathContext.Provider value={path}>
      <div className='App text-white min-h-[100vh]' style={pathname.includes('/home') || pathname.length <= 1 ? { backgroundColor: 'transparent' } : { backgroundColor: '#0f172a' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/coins' element={<Coins></Coins>} />
          <Route path='/details/:id' element={<DetailsPage></DetailsPage>} />
          <Route path='*' element={<PageNotFound></PageNotFound>} />
        </Routes>
      </div>
    </PathContext.Provider>
  );
}

export default App;

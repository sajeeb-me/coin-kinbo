import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// bg-slate-800
function App() {
  return (
    <div className='App text-white h-[100vh]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/coins' element={<Coins></Coins>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ShopContent from './components/ShopContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Header/>
      <ShopContent/>
      <Footer/>
    </div>
    
  )
}

export default App



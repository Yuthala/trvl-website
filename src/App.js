import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Order from './components/pages/Order';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/order' element={<Order />}/>
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import SignupPage from './landing_page/signup/SignupPage';
import LoginPage from './landing_page/signinn/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route> 
      <Route path='/support' element={<SupportPage/>}></Route> 
      <Route path='/login' element={<LoginPage/>}></Route>
      {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
    </Routes> 
  </BrowserRouter>
);


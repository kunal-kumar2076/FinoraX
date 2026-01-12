import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Team from './Team';
import Navbar from '../Navbar';
import Footer from '../Footer';




function AboutPage() {
    return ( 
        <>
            <Navbar/>
            <Header/>
            <Hero/>
            <Team/>
            <Footer/>
        </>
     );
}

export default AboutPage;
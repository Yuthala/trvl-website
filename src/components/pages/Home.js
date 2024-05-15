import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Adv from '../Adv';

function Home () {
    return (
        <>
            <HeroSection />
            <Adv />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;

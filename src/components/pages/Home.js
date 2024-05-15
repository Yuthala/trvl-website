import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Adv from '../Adv';
import Advantages from '../Advantages';

function Home () {
    return (
        <>
            <HeroSection />
            <Adv />
            <Advantages />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;

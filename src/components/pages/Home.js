import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Adv from '../Adv';
import Advantages from '../Advantages';
import Social from '../Social';
import Contacts from '../Contacts';

function Home () {
    return (
        <>
            <HeroSection />
            <Adv />
            <Advantages />
            <Cards />
            <Social />
            <Contacts />
        </>
    )
}

export default Home;

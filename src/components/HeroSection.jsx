import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className="hero-container">
        <video src="../videos/Green_pato_cover.mp4" autoPlay loop muted/>
        <h1>Питомник луковичных культур</h1>
        <p>Посевной материал собственного производства</p>
        <div className="hero-btns">
            <Button 
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >
            КАТАЛОГ
            </Button>

            <Button 
                className="btns"   
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >
            ВИДЕО О ПИТОМНИКЕ <i className="far fa-play-circle" />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
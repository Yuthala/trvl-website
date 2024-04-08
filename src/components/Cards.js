import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import cards from '../card';

function Cards() {

    const cardItem = cards.map(card => 
            <CardItem 
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
                key={card.id}
            />
        );
        console.log(cardItem);

  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {cardItem}
                    {/* <CardItem 
                        src={image9}
                        text="Explore the hidden waterfall deep inside  the Amazon jungle"
                        label="Adventure"
                        path='/services'
                    />
                    <CardItem 
                        src={image3}
                        text="Explore the hidden waterfall deep inside  the Amazon jungle"
                        label="Adventure"
                        path='/services'
                    /> */}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards
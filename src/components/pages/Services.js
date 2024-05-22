import React from 'react';
import '../../App.css';
import delivery from '../../delivery';
import DeliveryItem from '../DeliveryItem';

function Services() {

    const Icon = delivery.map(icon => {
        <DeliveryItem
            src={icon.src}
            alt={icon.alt}
            key={icon.id}
            label={icon.label}
        />
    });

    return (
        <div className="services">
            <section className="delivery">
                <h2>Доставка</h2>
                <p></p>
                <div className="delivery-wrapper">
                    {Icon}
                </div>
            </section>
            <section className="payment">
                <h2>Оплата</h2>
            </section>
        </div>
    )
}

export default Services;
import React from 'react';

function DeliveryItem({src, alt, label}) {
	return (
		<>
			<li className="cards__item">
				<figure className="cards__item__pic-wrap">
					<img src={src} alt={alt} className="cards__item__img" />
				</figure>
				<div className="cards__item__info">
					<h5 className="cards__item__text">{label}</h5>
				</div>
			</li>
   		 </>

	)
}

export default DeliveryItem;


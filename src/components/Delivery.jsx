import React from 'react';
import DeliveryItem from './DeliveryItem';
import './Delivery.css';
import delivery from '../delivery';

function Delivery() {
	const DeliveryCard = delivery.map(card => 
		<DeliveryItem 
			src={card.src}
			alt={card.alt}
			label={card.label}
			key={card.id}
		/>
	);

	return (
			<div className="delivery">
				<h2>Доставка и Оплата</h2>
				<p>Доставляем заказы по тарифам ведущих логистических операторов. <br/>Посевной материал отправляется в воздухопроницаемой упаковке, чтобы исключить порчу во время транспортировки. <br/> Упаковка предоставляется бесплатно.</p><br/>

				<p>Срок сборки заказа 1-3 рабочих дня. После окончания сборки заказа мы высылаем вам счет на оплату товара и доставки. вы можете произвести оплату удобным вам способом - по реквизитам, указанным в счете, или банковской картой через СБП. После поступления оплаты отправляем ваш заказ не позднее следующего рабочего дня и высылаем вам электронный чек.</p>
				<div className="delivery__container">
					{DeliveryCard}
				</div>
			</div>
		)
}

export default Delivery;
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './Social.css';
import icon6 from '../images/icons/vk-logo.svg';
import QRcode from '../images/qrcode.png';

function Social() {
	return (
		<div className="social-container">
			<img src={icon6} alt='VK-logo' className="social__icon"/>
			<div className="social__wrapper">
				<h3>Подпишись на наше сообщество ВКонтакте</h3>
				<ul className="social__list">
					<li>можно оформить предзаказ или заказать товары в наличии</li>
					<li>фотоотчеты</li>
					<li>анонсы акций и спецпредложений</li>
					<li>рекомендации по выращиванию</li>
					<li>любимые рецепты</li>
				</ul>
			</div>

			<Link to='https://vk.com/fermatikh' target="_blank">
				<img src={QRcode} alt='VK_community' className="social__img"/>
			</Link>

		</div>
	)
}

export default Social
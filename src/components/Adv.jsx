import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Adv.css';

function Adv() {
	return (
		<div className="adv-container">
			<p className="banner"><span className="bigger-text">только до 30 июня </span><br/>
			принимаем предзаказы на 2024 год <br/>
			по ценам 2023 года</p>

			<Button 
                className="btns"   
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >
            ЗАКАЗАТЬ
            </Button>
		</div>
	)
}

export default Adv
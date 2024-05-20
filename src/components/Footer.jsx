import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Mailto from 'react-mailto.js';
import QRcode from '../images/qrcode.png';
import tg from '../images/icons/tg.svg';


function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                        <h2>Контакты</h2>
                        <Link to='' target="_blank">
                            Telegram
                        </Link>
                        <Link to='https://vk.com/fermatikh' target="_blank">
				            ВКонтакте
			            </Link>
                        <Mailto to='sales@greenpato.ru'>
						    E-mail:<br />sales@greenpato.ru
					    </Mailto>
                </div>

                <div className="footer-link-items">
                    <h2>Культуры</h2>
                    <Link to='/products'>Озимый чеснок</Link>
                    <Link to='/products'>Лук шалот</Link>
                    <Link to='/products'>Лук салатный</Link>
                    <Link to='/products'>Гладиолусы</Link>
                </div>

                <div className="footer-link-items">
                    <h2>Заказ</h2>
                    <Link to='' target="_blank">
						<img src={tg} alt='TG-bot' className="tg-bot__img"/>
					</Link>
                    <Link to='https://vk.com/fermatikh' target="_blank">
				        <img src={QRcode} alt='VK_community' className="social__img"/>
			        </Link>
                </div>
            </div>

        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">TRVL © 2020</small>
                <div className="social-icons">
                    <Link 
                        to="/" 
                        target="_blank" 
                        aria-label="Facebook" 
                        className="social-icon-link facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link 
                        to="/" 
                        target="_blank" 
                        aria-label="Instagram" 
                        className="social-icon-link instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
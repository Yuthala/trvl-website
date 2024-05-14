import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo from './../images/logo.png'; 

function Navbar() {

    //состояние клик по гамбургеру
    const [click, setClick] = useState(false);
    //состояние отображения кнопки Sign Up в зависимости от размера экрана
    const [button, setButton] = useState(true);

    //функция клика по гамбургеру
    const handleClick = () => {
        setClick(!click);
    }
    //функция клика по крестику (закрыть меню гамбургер)
    const closeMobileMenu = () => setClick(false);

    //функция, показывающая кнопку Sign Up при ширине экрана 960px и выше, скрывает при ширине <960px
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    //чтобы кнопка Sign Up не появлялась при ширине экрана < 960px при обновлении страницы (отрисовывается 1 раз, т.к. передан пустой массив зависимостей)
    useEffect(() => {
        showButton();
    }, [])

    //showButton на событие resize    
    window.addEventListener('resize', showButton);

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                {/* при клике по логотипу mobile Menu также закрывается */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} width={90} alt="logo"/>
                    {/* <i className="fab fa-typo3"></i> */}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Главная
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="services/" className="nav-links" onClick={closeMobileMenu}>
                            Культуры
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Доставка и Оплата
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Заказать
                        </Link>
                    </li>
                </ul>
                {/* if button is true, return Button component */}
                {button && <Button buttonStyle="btn--outline">ЗАКАЗАТЬ</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
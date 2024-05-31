import React from 'react';
import '../../App.css';
import scheme3 from '../../images/onion/scheme3.jpeg';

export default function Onion() {

    return (
        <div className="onion">
            <div className="onion-header">
                <h1>Лук и лук-шалот</h1>
            </div>

            <section className="content">
                    <h3>Описание культуры</h3>
                    <p></p>
                    <h3>Польза лука</h3>
                    <p></p>
                    <h3>Условия выращивания</h3>
                    <p><p/>
                    <h3>Посадка</h3>
                    <p></p></p>
                    <p>Схема посадки приведена ниже. Перед посадкой необходимо обработать посевной материал фунгицидным препаратом - Максим, Престиж, Табу или 2%-ный раствор марганцовки.</p>
                    <div className="onion__scheme-wrapper">
                        <img src={scheme3} alt="scheme" className="scheme"/>
                    </div>

                    <h3>Правила ухода</h3>
                    <p></p>
                    <h2>Ассортимент</h2>
                    <p></p>
                    <div className="onion-assort">
                        {/* {Type} */}
                    </div>

                    <h2>Сорта</h2>
                    <div className="onion-sorts">
                        {/* {SortFirst} */}
                    </div>
                </section>
        </div>
    )
}

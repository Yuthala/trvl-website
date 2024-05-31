import React from 'react';
import '../../App.css';
import scheme3 from '../../images/onion/scheme3.jpeg';
import scheme4 from '../../images/onion/scheme4.jpeg';
import scheme5 from '../../images/onion/scheme5.jpeg';


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
                    <p>Схемы посадки севком и семенами приведены ниже. Севок перед посадкой необходимо обработать посевной материал фунгицидным препаратом - Максим, Престиж, Табу или 2%-ный раствор марганцовки.</p>
                    <div className="onion__scheme-wrapper">
                        <img src={scheme3} alt="scheme" className="scheme"/>
                        <img src={scheme5} alt="scheme" className="scheme"/>
                        <img src={scheme4} alt="scheme" className="scheme"/>
                    </div>

                    <h3>Правила ухода</h3>
                    <p></p>
                    <h2>Ассортимент</h2>
                    <p></p>
                    <div className="onion-assort">
                        <h3>Лук-шалот</h3>
                        <div className="onion-assort-shalot">
                            {/* {Type} */}
                        </div>

                        <div className="divider"></div>

                        <h3>Лук репчатый</h3>
                        <div className="onion-assort-rep">
                            {/* {Type} */}
                        </div>
                    </div>
                   

                    <h2>лук-шалот сорта</h2>
                    <div className="onion-sorts">
                        {/* {SortFirst} */}
                    </div>

                    <h2>лук репчатый сорта</h2>
                    <div className="onion-sorts">
                        {/* {SortFirst} */}
                    </div>
                </section>
        </div>
    )
}

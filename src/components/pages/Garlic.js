import React from 'react';
import '../../App.css';
import {GarlicType, GarlicSort} from '../GarlicItem';
import {assort, sorts} from '../../garlic';

export default function Garlic() {
    const Type= assort.map(item => 
        <GarlicType
            src={item.src}
            alt={item.alt}
            label={item.label}
            key={item.id}
        />
    );

    const firstSortDiv = sorts.slice(0, 4);
    const secondSortDiv = sorts.slice(4, 8);
    const SortFirst = firstSortDiv.map(i=> 
        <GarlicSort 
            src={i.src}
            alt={i.alt}
            label={i.label}
            key={i.id}
            item={i.item}
            text1={i.text1}
            text2={i.text2}
        />
    );
    const SortSecond = secondSortDiv.map(i => 
        <GarlicSort 
            src={i.src}
            alt={i.alt}
            label={i.label}
            key={i.id}
            item={i.item}
            text1={i.text1}
            text2={i.text2}
        />
    )

    return (
        <div className="garlic">
            <div className="garlic-header">
                <h1>озимый чеснок</h1>
            </div>

                <section className="content">
                    <h3>Описание культуры</h3>
                    <p></p>
                    <h3>Польза чеснока</h3>
                    <p></p>
                    <h3>Условия выращивания</h3>
                    <p></p>
                    <h3>Правила ухода</h3>
                    <p></p>
                    <h2>Ассортимент</h2>
                    <p>У нас вы можете приобрести посевной материал озимого чеснока различных генераций в зависимости от ваших нужд.<br/> 
                    Хотите получить товарную крупную головку уже на следующий год - выбирайте зубок или однозубок. Однозубок представляет собой лучший посадочный материал, поскольку он не требует дробления, удобен при посадке, обладает близкой к 100% всхожестью и гарантировано может быть использован для репродукции в течение 5 лет без обновления через бульбочку. <br/>
                    Если же вы хотите получить большой объем посевного материала для собственных нужд или для разведения и при этом уменьшить свои затраты, то выбирайте бульбочку. При посадке бульбочки весной уже в августе того же года из бульбочки вырастет однозубок. Посадив однозубок осенью на новое место, в следующем году вы получите полноценную товарную головку чеснока.</p>
                    <div className="garlic-assort">
                        {Type}
                    </div>
                    <h2>Сорта</h2>
                    <div className="garlic-sorts">
                        {SortFirst}
                    </div>
                    <h2>Скоро в продаже:</h2>
                    <div className="garlic-sorts coming">
                        {SortSecond}
                    </div>
                </section>
        </div>
    )
}
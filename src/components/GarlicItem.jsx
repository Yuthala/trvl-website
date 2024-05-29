import React from 'react';

export function GarlicType ({id, src, alt, label, priceA, priceB, priceC, sizeA, sizeB, sizeC, measurement}) {
	return (
		<>
		 <div className="garlic__type-item">
			<img src={src} alt={alt} id={id}/>
			<h5>{label}</h5>
			
			<div className="garlic-price">
				<h4>Цена за {measurement}</h4>
				<p>Категория А {sizeA}: {priceA}</p>
				<p>Категория Б {sizeB}: {priceB}</p>
				<p>Категория В {sizeC}: {priceC}</p>
			</div>
		  </div>
		</>
	)
}

export function GarlicSort({id, src, alt, label, item, text1, text2}) {
	return (
		<>
			<li className="garlic__sort-item">
			   <figure className="garlic__sort-wrap" data-category={label}>
				   <img src={src} alt={alt} id={id}/>
			   </figure>

			   <div className="garlic__sort-info">
				   <h5>{item}</h5>
				   <p><span className="garlic-bold">Особенности сорта:    </span> {text1}</p>
				   <p><span className="garlic-bold">Описание головки:    </span>{text2}</p>
			   </div>
	   		</li>
   		</>
	)
}
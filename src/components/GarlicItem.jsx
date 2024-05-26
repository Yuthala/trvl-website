import React from 'react';

export function GarlicType ({id, src, alt, label}) {
	return (
		<>
		 <div className="garlic__type-item">
			<img src={src} alt={alt} id={id}/>
			<h5>{label}</h5>
		  </div>
		</>
	)
}

export function GarlicSort({id, src, alt, label, item, text1, text2}) {
	<>
		 <li className="garlic__sort-item">
                <figure className="garlic__sort-wrap" data-category={label}>
                    <img src={src} alt={alt} id={id}/>
                </figure>
				
                <div className="garlic__sort-info">
                    <h5>{item}</h5>
					<p>Особенности сорта: {text1}</p>
					<p>Описание головки: {text2}</p>
                </div>
        </li>
	</>
}
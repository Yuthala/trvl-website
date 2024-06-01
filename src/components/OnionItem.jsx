import React from 'react';

export function OnionType({id, src, alt, label}) {
	return (
		<>
			<div className="onion__type-item">
				<img src={src} alt={alt} id={id}/>
				<h5>{label}</h5>
			</div>
		</>
	)
}
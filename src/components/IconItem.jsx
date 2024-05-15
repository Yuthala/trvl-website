import React from 'react';

function IconItem({src, label, alt}) {
	return (
	  <>
		  <div className="icon__item">
			<img src={src} alt={alt} className="icon__item__img" />
			<h5 className="icon__item__label">{label}</h5>
		  </div>
	  </>
	)
  }
  
  export default IconItem
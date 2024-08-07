import React from 'react';

function Business(props) {
  return (
    <div>
        <h1 className="font-bold text-4xl text-center mb-6">{props.name}</h1>
        <img src={props.imageSrc} alt={props.name} className= "object-fill h-48 w-48 rounded-lg relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"/>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.category}</p>
        <p>{props.rating}</p>
    </div>
  );
}

export default Business;

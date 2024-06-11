import React from 'react';

function Business(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <img src={props.imageSrc} alt={props.name}/>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.category}</p>
        <p>{props.rating}</p>
    </div>
  );
}

export default Business;

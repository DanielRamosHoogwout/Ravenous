import React from 'react';

const test = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

function Business() {
  return (
    <div>
        <h1>{test.name}</h1>
        <img src={test.imageSrc} />
        <p>{test.address}</p>
        <p>{test.city}</p>
        <p>{test.state}</p>
        <p>{test.category}</p>
        <p>{test.rating}</p>
    </div>
  );
}

export default Business;

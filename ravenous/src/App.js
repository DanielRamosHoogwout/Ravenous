import './App.css';
import React, { useState } from 'react';
import BusinessList from "./components/businessList.js";
import SearchBar from './components/searchBar.js';


function App() {

  const data = [
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Ristoranti',
        address: '1010 Fake Street',
        city: 'Saint Martin',
        state: 'CA',
        zipCode: '10101',
        category: 'Frenchy',
        rating: 4.7,
        reviewCount: 900
    }
    ,
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Benny Hills',
        address: '69 Sweet Street',
        city: 'Santa Ponca',
        state: 'UK',
        zipCode: '007',
        category: 'Boliwood',
        rating: 4.1,
        reviewCount: 37
    }
];

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <SearchBar onSearch={setInput} /> {/* Pasa el callback para actualizar el estado */}
      <BusinessList input={input} data={data}/>
    </div>
  );
}

export default App;

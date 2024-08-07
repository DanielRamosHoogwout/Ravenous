import './App.css';
import React, { useState } from 'react';
import BusinessList from "./components/businessList.js";
import SearchBar from './components/searchBar.js';
import NavbarSimple from './components/navbarSimple.js';


function App() {

  const data = [
    {
        imageSrc: 'https://static.vecteezy.com/system/resources/previews/022/825/544/original/orange-fruit-orange-on-transparent-background-free-png.png',
        name: 'Orange',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://lh3.googleusercontent.com/proxy/bGAydTpQaCu_vI_mJ5RDSRrW8NdsPmTdkyS1-PvhllYDVF-cLLolhflLL7PuLjL57E1cySrGoMc05oJJpgUYG8Zb1rJftxt9-L6AqN4rifbK',
        name: 'Avocado',
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
    <div className="">
      <NavbarSimple />
      <SearchBar onSearch={setInput} /> {/* Pasa el callback para actualizar el estado */}
      <BusinessList input={input} data={data}/>
    </div>
  );
}

export default App;

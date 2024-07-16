import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInput(newValue);
        onSearch(newValue); // Llama al callback para propagar el cambio
    };

    return (
        <div className='flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto my-6'>
            <input 
                className = "w-full outline-none bg-white text-gray-600 text-xl px-4 py-3"
                type="text" 
                placeholder="Buscar negocios..."
                value={input}
                onChange={handleInputChange}
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mr-3 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

        </div>
    );
}

export default SearchBar;

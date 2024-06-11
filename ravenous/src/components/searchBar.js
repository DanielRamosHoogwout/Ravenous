import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInput(newValue);
        onSearch(newValue); // Llama al callback para propagar el cambio
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar negocios..."
                value={input}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;

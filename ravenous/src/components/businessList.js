import React from 'react';
import Business from './business.js';
import '../styles/styles.css';

function BusinessList(props) {


    // Crear una nueva array filtrando la array original
    const filteredData = props.data.filter((el) => {
        // Si no hay input, devuelve la lista original
        if (props.input === '') {
            return el;
        }
        // Devuelve el negocio cuyo nombre contenga el input del usuario (ignorando mayúsculas/minúsculas)
        else {
            return el.name.toLowerCase().includes(props.input.toLowerCase());
        }
    });

    return (
        <div className="grid-container">
            <div className="grid-item">
                {filteredData.map((business, index) => 
                    <Business
                        key={index}
                        imageSrc={business.imageSrc}
                        name={business.name}
                        address={business.address}
                        city={business.city}
                        state={business.state}
                        zipCode={business.zipCode}
                        category={business.category}
                        rating={business.rating}
                        reviewCount={business.reviewCount}
                    />
                )}
            </div>
        </div>
    );
}

export default BusinessList;

import React from 'react';
import Business from './business.js';
//import '../styles/styles.css';

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
        <div className="container mx-4 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
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

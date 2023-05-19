import React from 'react';

interface CarItemProps {
    car: {
        id: number;
        brand: string;
        model: string;
        price: number;
        year: number;
        images: string[];
    };
}

const CarItem: React.FC<CarItemProps> = ({ car }) => {
    return (
        <div>
            <h3>{car.brand}</h3>
            <p>Model: {car.model}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            <div>
                {car.images.map((image, index) => (
                    <img key={index} src={image} alt={`Car ${index + 1}`} style={{ width: '200px', height: 'auto' }} />
                ))}
            </div>
            <hr />
        </div>
    );
};

export default CarItem;

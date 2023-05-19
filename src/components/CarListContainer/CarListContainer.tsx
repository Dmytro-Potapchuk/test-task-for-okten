import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarItem from '../CarItem/CarItem';
import { Button, Container, Form } from 'react-bootstrap';

interface NewCar {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const CarListContainer: React.FC = () => {
    const [cars, setCars] = useState<any[]>([]);
    const [newCar, setNewCar] = useState<NewCar>({
        brand: '',
        model: '',
        price: 0,
        year: 0,
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/cars');
            setCars(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewCar((prevNewCar) => ({
            ...prevNewCar,
            [name]: name === 'price' || name === 'year' ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/cars', newCar);
            setNewCar({ brand: '', model: '', price: 0, year: 0 });
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <h1>Car App</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        name="brand"
                        value={newCar.brand}
                        placeholder="Enter brand"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        type="text"
                        name="model"
                        value={newCar.model}
                        placeholder="Enter model"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={newCar.price}
                        placeholder="Enter price"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        type="number"
                        name="year"
                        value={newCar.year}
                        placeholder="Enter year"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Додати оголошення
                </Button>
            </Form>

            {cars.map((car) => (
                <CarItem key={car.id} car={car} />
            ))}
        </Container>
    );
};

export default CarListContainer;

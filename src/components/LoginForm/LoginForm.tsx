import React, { useState } from 'react';


import CarListContainer from '../CarListContainer/CarListContainer';
import { Button, Container, Form } from "react-bootstrap";
import {registerService} from "../../service";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await registerService.login(email, password);

            console.log(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLoginClick = () => {
        setIsFormVisible(true);
    };

    return (
        <Container>
            {!isAuthenticated && !isFormVisible && (
                <Button variant="primary" onClick={handleLoginClick}>
                    Увійти
                </Button>
            )}

            {isFormVisible && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email адреса</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Введіть email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введіть пароль"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Увійти
                    </Button>
                </Form>
            )}

            {isAuthenticated && (
                <div>
                    <h1>Car Marketplace</h1>
                    <CarListContainer />
                </div>
            )}
        </Container>
    );
};

export default LoginForm;

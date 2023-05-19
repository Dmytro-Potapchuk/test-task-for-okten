import React, { useState } from 'react';

import { Button, Container, Form } from "react-bootstrap";
import {registerService} from "../../service";

const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await registerService.register(email, password);

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegisterClick = () => {
        setIsFormVisible(true);
    };

    return (
        <Container>
            {!isFormVisible && (
                <Button variant="primary" onClick={handleRegisterClick}>
                    Зареєструватися
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
                        Зареєструватися
                    </Button>
                </Form>
            )}
        </Container>
    );
};

export default RegisterForm;

import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import LoginForm from '../components/LoginForm/LoginForm';
import styles from './AdvertisementsPage.module.css';
import { PersonPlusFill } from 'react-bootstrap-icons';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';


const AdvertisementsPage: React.FC = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>Реєстрація</h2>
                        <PersonPlusFill size={20} />
                        <RegisterForm />
                    </div>
                </Col>
                <Col>
                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>Увійти</h2>
                        <ArrowRightCircleFill size={20} />
                        <LoginForm />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdvertisementsPage;

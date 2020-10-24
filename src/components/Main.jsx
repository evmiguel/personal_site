import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Main.css';
import Profile from './Profile';
import Links from './Links';

class Main extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Row>
                    <Col><Profile /></Col>
                    <Col><Links /></Col>
                </Row>
            </Container>
        )
    }
}

export default Main;
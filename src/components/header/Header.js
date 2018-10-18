import React from 'react';
import { Container, InputGroup, InputGroupAddon, Input, Row, Col, Button } from 'reactstrap'

const Header = () => (
    <div className="container-fluid header">
        <Container>
            <Row className="py-3 d-flex align-items-md-center justify-content-between">
                <Col md="3">
                        <h1>Logo</h1>
                </Col>

                <Col md="4">
                    <InputGroup>
                        <Input placeholder="Search our library..." />
                        <InputG roupAddon addonType="append">@</InputGroupAddon>
                    </InputGroup>
                </Col>

                <Col md="4" className="align-self-end">
                    <Button className="hola" size="lg">Login or Register</Button>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Header;
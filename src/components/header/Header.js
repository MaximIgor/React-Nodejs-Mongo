import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

const Header = () => (
    <div className="container-fluid header py-3 sticky-top">
        <Container className="align-items-md-center">
            <Row className="py-3">
                <Col>
                        <h1 className="logotext">artLocus<span className="h6">®</span></h1>
                </Col>

                <Row className="align-items-md-center">
                    <Col className="input-group align-items-md-center">
                        <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                                <button className="btn searchbutton" type="submit"><span className="fas fa-search"></span></button>
                            </div>
                    </Col>
                    <Col md="6 a">
                        <Button className="loginbutton py-2" size="lg">Login or Register</Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    </div>
)

export default Header;
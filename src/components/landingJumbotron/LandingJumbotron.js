import React from 'react';
import { Button, Row, Col } from 'reactstrap'

const LandingJumbotron = () => (
    <Row className="container-fluid">
        <Col md="12" className="text-center mt-5">
            <h2 className="jumbotron-title mb-3">
                The place for your <br/>
                cinematographic masterpiece.
            </h2>
        </Col>
        <Col md="12">
            <p className="jumbotron-text text-center">
                artLocus makes it easy for new or experienced creators to share <br/>
                film artworks. We give you the tools for making your creations <br/>
                reach those who you want to reach.
            </p>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
            <Button className="jumbotron-button py-3 px-4">Find out more</Button>
        </Col>
        <img src="../../img/1_ny.jpg" alt="ny"/>
    </Row>
)

export default LandingJumbotron;
import React from 'react';
import { Button, Row, Col } from 'reactstrap'

const LandingJumbotron = () => (
    <Row className="container-fluid jumbotron-main">
        <div className="overlay">
            <Col md="12" className="text-center">
                <h2 className="jumbotron-title">
                    The place for your <br/>
                    cinematographic masterpiece.
                </h2>
            </Col>
            <Col md="12">
                <p className="jumbotron-text text-center my-0">
                    artLocus makes it easy for new or experienced creators to share <br/>
                    film artworks. We give you the tools for making your creations <br/>
                    reach those who you want to reach.
                </p>
            </Col>
            <Col md="12" className="d-flex align-items-center justify-content-center">
                <Button className="jumbotron-button py-3 px-4">Find out more</Button>
            </Col>
        </div>
    </Row>
)

export default LandingJumbotron;
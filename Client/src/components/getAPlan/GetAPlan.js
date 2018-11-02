import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const GetAPlan = () => (
    <Row className="d-flex align-items-center">
        <Col md="6" className="text-right my-5 pl-5">
            <span className="h2">Art appreciation has never been so simple.</span>
            <br/><br/>
            <p>
                From watching new pieces of art to monetization of your work is easier than any video streaming
                platform. We make all the hard work for you.
            </p>
            <a className="gap-link card-link" href="../profile/id">Find out more about our monetization plans.</a>
            <br/><br/><br/><br/><br/>
            <hr className="gap-hrline"/>
            <p>
                Free and pro plans from as low as <b>2.99 USD.</b>
            </p>
            <Button className="gap-button">Get a plan</Button>
        </Col>
        <Col md="6" className="gap-img"/>
    </Row>
)

export default GetAPlan;
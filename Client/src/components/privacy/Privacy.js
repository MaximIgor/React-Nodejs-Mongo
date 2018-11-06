import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const Privacy = () => (
    <Row className="d-flex align-items-center privacy-main">
        {/*<Col md="6" className="">
            <img src={require('../../img/5_tablet.jpg')} alt="kk" style={{width: '100%'}}/>
        </Col>*/}
        <Col md="6" className="privacy-text">
            <span className="h2">Worried about piracy?</span>
            <br/><br/>
            <p>
                artLocus makes sure your videos are always safe using proprietary
                security DRM software and recording detection algorithms.
                We know how it feels to see your artwork being illegally distributed,
                so we will take care of it as if it was ours.
            </p>
            <br/>
            <hr className="privacy-hrline"/>
            <p>
                What security technologies does artLocus use?
            </p>
            <Button className="privacy-button">Find out</Button>
        </Col>
    </Row>
)

export default Privacy;
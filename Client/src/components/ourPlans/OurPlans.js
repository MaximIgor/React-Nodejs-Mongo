import React from 'react';
import { Row, Col, Card, Button, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

const OurPlans = () => (
    <div className="ourplans1">
    <Row className="d-flex justify-content-center">
        
        <div className="ourplans2 d-flex justify-content-center mb-4">
        <Col md="9">
            <span className="d-flex justify-content-center mt-3 h2">Our plans</span>
            <span className="d-flex justify-content-center mb-4">There is so much more we want to tell you about.</span>
            <div>
            <CardDeck id="cards">
                 <Card className="content">
                    <CardBody>
                    <CardTitle className="d-flex justify-content-center">Free</CardTitle>
                    <CardSubtitle className="d-flex justify-content-center mb-4">For viewers and art lovers</CardSubtitle>
                    <CardText className="d-flex justify-content-center align-items-center">
                         <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Unlimited video views</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Video on-demand access</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Rate your favorite videos</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Limited to one upload every two months</li>
                        </ul>
                    </CardText>
                    <Button className="bntregister d-flex align-items-end">Register</Button>
                    </CardBody>
                </Card>
                <Card className="content">
                    <CardBody>
                    <CardTitle className="d-flex justify-content-center">Creative</CardTitle>
                    <CardSubtitle className="d-flex justify-content-center mb-4">For ambitious creative producers and dreamers</CardSubtitle>
                    <CardText className="d-flex justify-content-center">
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>artLocus' demographic statistics</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Upload video on-demand content</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>DRM Management</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Limited to one upload every month</li>
                        </ul>
                    </CardText>
                    <Button className="bntregister mr-4">Subscribe</Button>
                    </CardBody>
                </Card>
                   <Card className="content">
                    <CardBody>
                    <CardTitle className="d-flex justify-content-center">Pro</CardTitle>
                    <CardSubtitle className="d-flex justify-content-center mb-4">Company plans for the creative industry</CardSubtitle>
                    <CardText className="d-flex justify-content-center">
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Subscription as monetization plan</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Starred in artLocus' selection</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Partnership</li>
                            <li><span className="fa-li"><i className="fa fa-check" aria-hidden="true"/></span>Unlimited uploads</li>
                        </ul>
                    </CardText>
                    <Button className="bntregister mr-4">Read more</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            </div>
            <span className="d-flex justify-content-center mt-3 mb-3"> Already a member?  <button className="ml-2 mb-3">Read more</button> </span>
            </Col>
         </div >
    </Row>
    </div>
)

export default OurPlans;
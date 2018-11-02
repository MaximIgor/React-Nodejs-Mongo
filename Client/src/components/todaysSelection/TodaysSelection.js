import React from 'react';
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const TodaysSelection = () => (
    <div className="todays-bg">
        <div className="white-overlay">
            <Row>
                <Col md="12" className="text-center">
                    <span className="h2">Today's selection</span>
                    <br/>
                    <span>Watch today's top rated films.</span>
                </Col>
            </Row>
            <Row className="first-row">
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Film title</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Film title</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Film title</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="second-row">
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Film title</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Film title</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Film title</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
)

export default TodaysSelection;
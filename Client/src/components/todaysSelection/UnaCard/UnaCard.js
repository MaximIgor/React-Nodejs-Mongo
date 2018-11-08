import React from 'react';
import {Col} from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const unCard = (props) => (
    <Col md="4">
        <Card className="my-2 unaCard">
            <iframe  src={props.link} height="200" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.desc}</CardText>
            </CardBody>
        </Card>
    </Col>
)

export default unCard;
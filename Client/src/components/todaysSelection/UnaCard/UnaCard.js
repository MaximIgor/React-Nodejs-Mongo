import React from 'react';
import {Col} from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const unCard = (props) => (
    <Col md="4">
        <Card className="my-2">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.desc}</CardText>
            </CardBody>
        </Card>
    </Col>
)

export default unCard;
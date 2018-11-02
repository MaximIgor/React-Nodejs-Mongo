import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Breadcrumb, BreadcrumbItem, Input, FormGroup, Label, Form} from 'reactstrap'
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalToggle: false,
            login: false,
            register: true
        };

        this.toggle = this.toggle.bind(this);
        this.loginToggle = this.loginToggle.bind(this);
    }

    toggle() {
        this.setState({
            modalToggle: !this.state.modalToggle
        });
    }

    loginToggle() {
        this.setState({login: !this.state.login})
    }

    render() {
        return (
            <div className="container-fluid header py-3">
                <Container className="align-items-md-center">
                    <Row className="py-1">
                        <Col>
                            <h1 className="logotext">artLocus<span className="h6">®</span></h1>
                        </Col>

                        <Row className="align-items-md-center">
                            <Col className="input-group align-items-md-center">
                                <input type="text" className="form-control" placeholder="Search"/>
                                <div className="input-group-append">
                                    <button className="btn searchbutton" type="submit"><Link to='/searchResults'><span className="fas fa-search"></span></Link></button>
                                </div>
                            </Col>
                            <Col md="6 a">
                                <Button className="loginbutton py-2" size="lg" onClick={this.toggle}>Login or Register</Button>
                                    <Modal isOpen={this.state.modalToggle} toggle={this.toggle}>
                                        <ModalHeader toggle={this.toggle}>
                                            <Breadcrumb  onClick={this.loginToggle} >
                                                <BreadcrumbItem active={!this.state.login}>
                                                    <span className="unselectable">Login</span>
                                                </BreadcrumbItem>
                                                <BreadcrumbItem active={this.state.login}>
                                                    <span className="unselectable">Register</span>
                                                </BreadcrumbItem>
                                            </Breadcrumb>
                                        </ModalHeader>
                                        <ModalBody>
                                            {
                                                this.state.login ?
                                                    <Form>
                                                        <span className="h5 text-center">Login to your account</span>
                                                        <FormGroup className="mt-3">
                                                            <Label for="userLogin">Username</Label>
                                                            <Input type="text" name="userLogin" id="userLogin" placeholder="Username" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="passLogin">Password</Label>
                                                            <Input type="password" name="passLogin" id="passLogin" placeholder="Password" />
                                                        </FormGroup>
                                                    </Form>
                                                    :
                                                    <Form>
                                                        <span className="h5 text-center">Join artLocus today!</span>
                                                        <FormGroup className="mt-3">
                                                            <Label for="usernameReg">Choose a username</Label>
                                                            <Input type="text" name="usernameReg" id="usrReg" placeholder="Write your username" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="mailReg">E-mail</Label>
                                                            <Input type="email" name="mailReg" id="mailReg" placeholder="Enter a valid e-mail" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="passReg">Password</Label>
                                                            <Input type="password" name="passReg" id="passReg" placeholder="Choose a strong password" />
                                                        </FormGroup>
                                                    </Form>
                                            }
                                        </ModalBody>
                                        <ModalFooter>
                                            {
                                                this.state.login ?
                                                    <Button className="loginbutton">Login</Button> :
                                                    <Button className="loginbutton">Register</Button>
                                            }
                                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;
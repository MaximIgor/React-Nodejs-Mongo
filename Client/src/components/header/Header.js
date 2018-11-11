import React from 'react';
import { Alert, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Breadcrumb, BreadcrumbItem, Input, FormGroup, Label, Form} from 'reactstrap'
import { Link } from 'react-router-dom';
import { Route, Redirect} from 'react-router';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalToggle: false,
            login: false,
            register: true,
            search: '',
            username:'', // USERNAME LOGIN
            password:'',  // PASSWORD LOGIN
            dialogError:'', // TEXTO ERROR
            alert: false,    // PRENDER APAGAR ALERTAS,
            // REGISTRER
            usernameReg : '', // USERNAME REGISTER
            mailReg:'',        // MAIL REGISTER
            passReg : '',       // PASSWORD
            userType: '',       //USER TYPE     
            userLoggedin: false



        };
    }
        
    toggle= () => {
        this.setState({
            modalToggle: !this.state.modalToggle
        });
    }

    loginToggle = () => {
        this.setState({login: !this.state.login})
    }


    // ======================   LOGIN =============================

    autenticate = e => {
    e.preventDefault();
         fetch('http://localhost:8080/api/authenticate', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
         body: JSON.stringify(
             {username: this.state.username, 
              password: this.state.password}
             )
        }).then(response => response.json())
          .then((data) => {

                console.log(data)
                if(data.msg == 'Error_001'){ // ERROR USERNAME NOT FOUND
                    this.setState({alert: true , dialogError : "Wrong Username, Please Try Again"})
                }else if (data.msg == "Error_002"){ // ERROR WRONG PASSWORD
                    this.setState({alert: true , dialogError : "Wrong Password, Please Try Again"})
                }else {                    
                    // SET LOCAL STORAGE TOKEN
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username' , data.username);  
                    localStorage.setItem('date' , data.date);  
                    localStorage.setItem('usertype' , data.usertype); 

                    // REDIRECT TO PAGE
                    window.location.replace("/profile");                
                }
          })
          .catch((error)=>error);          
    }

    // ====================== END  LOGIN =============================


    // ======================  BEGIN REGISTER ========================

    regUser = (e) =>{
        e.preventDefault();
        let fecha = new Date();
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
         body: JSON.stringify(
             {  username: this.state.usernameReg,
                email: this.state.mailReg,
                password: this.state.passReg,
                usertype: this.state.userType, 
                date: fecha
              }
             )
        }).then(response => response.json())
          .then((data) => {
                console.log(data);
                
                // SET LOCAL STORAGE TOKEN
                localStorage.setItem('token', data.token);
                localStorage.setItem('username' , data.username); 
                localStorage.setItem('date' , data.date);  
                localStorage.setItem('usertype' , data.usertype); 
                // REDIRECT TO PAGE
                window.location.replace("/profile");                
          }).catch((err)=>console.log(err));
        
    }

    // ======================  END REGISTER ========================

    logout = () =>{
        localStorage.clear();
        window.location.replace("/");
    }  

    change = e => { // PUSH DATA TO STATE 
        this.setState({
            [e.target.name] : e.target.value,
            alert:false
        })
    }
    searchInput = (event) =>{        
        this.setState({
            search: event.target.value
        });
        console.log(this.state.search);   
    }

    componentDidMount(){
        if (localStorage.getItem('username')!= null)
            this.setState({userLoggedin: true});
    }

    render() {

        return (
                <Container className="align-items-md-center">
                    <Row className="py-1">
                        <Col>
                            <Link to="/"><h1 className="logotext">artLocus<span className="h6">®</span></h1></Link>
                        </Col>

                        <Row className="align-items-md-center">
                            <Col className="input-group align-items-md-center">
                                <input type="text" className="form-control" placeholder="Search" onChange={(e)=>this.searchInput(e)}/>
                                <div className="input-group-append">
                                    <button className="btn searchbutton" type="submit"><Link to={`/searchResults/${this.state.search}`}><span className="fas fa-search"></span></Link></button>
                                </div>
                            </Col>
                            <Col md="6 a">
                            {
                                this.state.userLoggedin ?
                                <Button className="loginbutton py-2" size="lg" onClick={this.logout}>Logout</Button> :
                                <Button className="loginbutton py-2" size="lg" onClick={this.toggle}>Login or Register</Button>
                            }
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
                                                    <Form id="login"> {/* LOGIN USER */}
                                                        <span className="h5 text-center">Login to your account</span>
                                                        <FormGroup className="mt-3">
                                                            <Label for="userLogin">Username</Label>
                                                            <Input  type="text" 
                                                                    name="username" 
                                                                    id= "username"
                                                                    placeholder="Username"
                                                                    value={this.state.username} 
                                                                    onChange={e=> this.change(e)}
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="passLogin">Password</Label>
                                                            <Input  type="password" 
                                                                    name="password" 
                                                                    id="password"
                                                                    placeholder="Password" 
                                                                    value={this.state.password}
                                                                    onChange={e=> this.change(e)}
                                                            />
                                                        </FormGroup>
                                                    </Form>
                                                    :
                                                    <Form>         {/* REGISTER USER */}
                                                        <span className="h5 text-center">Join artLocus today!</span>
                                                        <FormGroup className="mt-3">
                                                            <Label for="usernameReg">Choose a username</Label>
                                                            <Input  type="text" 
                                                                    name="usernameReg" 
                                                                    id="usrReg" 
                                                                    placeholder="Write your username" 
                                                                    value={this.state.usernameReg} 
                                                                    onChange={e=> this.change(e)}
          
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="mailReg">E-mail</Label>
                                                            <Input  type="email" 
                                                                    name="mailReg" 
                                                                    id="mailReg" 
                                                                    placeholder="Enter a valid e-mail" 
                                                                    value={this.state.mailReg} 
                                                                    onChange={e=> this.change(e)}
             
                                                                    />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="passReg">Password</Label>
                                                            <Input  type="password" 
                                                                    name="passReg" 
                                                                    id="passReg" 
                                                                    placeholder="Choose a strong password"
                                                                    value={this.state.passReg}
                                                                    onChange={e=> this.change(e)}
                                                                    />
                                                           <FormGroup tag="fieldset">
                                                                <legend>Select your plan:</legend>
                                                                <FormGroup check>
                                                                    <Label check>
                                                                    <Input type="radio" name="userType" value="1" onClick={e=> this.change(e)} />{' '}
                                                                    Pro
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup check>
                                                                    <Label check>
                                                                    <Input type="radio" name="userType" value="2" onClick={e=> this.change(e)}/>{' '}
                                                                    Creative
                                                                    </Label>
                                                                </FormGroup>
                                                                <FormGroup check>
                                                                    <Label check>
                                                                    <Input type="radio" name="userType" value="3" onClick={e=> this.change(e)}/>{' '}
                                                                    Free
                                                                    </Label>
                                                                </FormGroup>
                                                            </FormGroup>
                                                        </FormGroup>
                                                    </Form>
                                            }

                                            {
                                                this.state.alert && <div>
                                                <Alert color="danger">
                                                   <p>{this.state.dialogError}</p>
                                                 </Alert>
                                                </div>

                                            
                                            }                                  

                                        </ModalBody>
                                        <ModalFooter>
                                            {
                                                this.state.login ?
                                                    <Button className="loginbutton" 
                                                            form="login" 
                                                            type="submit"
                                                            onClick={e=> this.autenticate(e)}
                                                            >
                                                            Login
                                                    </Button> :
                                                    <Button className="loginbutton" onClick={e=> this.regUser(e)}>Register</Button>
                                            }
                                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>



                                        </ModalFooter>
                                    </Modal>
                            </Col>
                        </Row>
                    </Row>
                </Container> 
        )
    }
}

export default Header;
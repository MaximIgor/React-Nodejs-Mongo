import React, {Component} from 'react';
import UnaCard from '../todaysSelection/UnaCard/UnaCard';
import { Row, Col } from 'reactstrap';
const axios = require('axios');

class SearchResults extends Component {
    constructor(props){
        super(props);

        this.state = {
            docsArray: []
        }
    };

    printCards() {
        let myArray =this.state.docsArray;
        let cardArray = [];

        console.log(myArray);
        
                
        for (let i=0; i<myArray.length;i++){
            let singleClip = {...myArray[i]};
            cardArray.push(<UnaCard name={singleClip.nomClip} desc={singleClip.descripcion} link= {singleClip.url} />);      
        }   
        return cardArray
    }

    componentDidMount(){
       
        fetch('http://localhost:8080/api/search', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token' : 'REQUESTGUESTUSER'
            },
            body: JSON.stringify({  search: this.props.match.params.id})
        }).then(response => response.json())  
        .then(data => this.setState({docsArray: data}))
        .catch(error => console.error(error));
    }

    render(){        
        return(
        <div className="todays-bg">
            <div className="white-overlay">
                <Row>
                    <Col md="12" className="text-center">
                        <span className="h2">Search results for '{this.props.match.params.id}'</span>
                        <br/>
                    </Col>
                </Row>
                <Row className="first-row">           
                    {this.printCards()}
                </Row>
            </div>
        </div>
        )
    }
}

export default SearchResults;
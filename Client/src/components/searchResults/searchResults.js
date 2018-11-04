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
                
        for (let i=0; i<myArray.length;i++){
            let singleClip = {...myArray[i]};
            cardArray.push(<UnaCard name={singleClip.nomClip} desc={singleClip.descripcion} />);      
        }   
        return cardArray
    }

    componentDidMount(){
        let searchWord = this.props.match.params.id;
        axios.post('/api/search',{
            search: searchWord
        })   
        .then((data)=>{
            let results = JSON.parse(data.request.response);
            this.setState({docsArray: results});
            console.log(this.state.docsArray); 
        })
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
import React from 'react'
import { Row, Col, Button, Collapse } from 'reactstrap'
import { Circle } from 'rc-progress'
import { VictoryChart, VictoryGroup, VictoryArea } from 'victory'
import UnaCard from "../todaysSelection/UnaCard/UnaCard";

class Profile extends React.Component {

  constructor(props) {

    super (props)

    this.state = {
      collapse: false,
      videosArray: [],
      uName: ''
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  renderVideos = () => {
    let temp = {...this.state.videosArray};
    let cardArray = [];

    for (let i=0; i<9;i++){
      let clip = {...temp[i]};
      cardArray.push(<UnaCard name={clip.nomClip} desc={clip.descripcion} />);
    }
    return cardArray
  }

  getStorage = () => {
    this.setState({uName: localStorage.getItem('username'),token: localStorage.getItem('token')});
    console.log(this.state.uName);
    
    return this.state.uName

    // console.log(localStorage.getItem('username'));
    
    
  }

  componentDidMount(){

    this.getStorage();

    fetch('http://localhost:8080/api/getHomeVids', {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token' : 'REQUESTGUESTUSER'
            }})
    .then((resp)=>resp.json())
    .then((data)=>this.setState({videosArray: {...data}}))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="mb-5">

        <Row className="mx-5 d-flex py-5 align-items-center justify-content-center">
          <Col md="8" className="pl-5">
            <span className="h1">{this.state.uName}</span>
            <br/>
            <span className="h4">Member since 2017</span>
          </Col>
          <Col md="4" className="d-flex align-items-center justify-content-around">
            <Button><i className="fas fa-upload fa-2x"/></Button>
            <Button><i className="far fa-arrow-alt-circle-up fa-2x"/></Button>
            <Button onClick={this.toggle}><i className="fas fa-angle-double-down fa-2x"/></Button>
          </Col>
        </Row>

        <br/><br/>

        <Collapse isOpen={this.state.collapse} className="py-4 border shadow-lg mb-5 container">
          <Row className="mx-5">
            <Col md="4" className="border p-3 shadow-sm">
              <span className="h4">Bio</span>
              <br/>
              <p className="mt-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam consequuntur dolorum officiis.
                Ab atque nobis quam quos recusandae! At cumque doloremque eum explicabo fugit ipsam, laboriosam molestiae quaerat quod!
              </p>
            </Col>
            <Col md="4" className="border p-3 d-flex flex-column justify-content-center align-items-center">
              <Row>
                <Col md="12">
                  <span className="h4">Total hours watched</span>
                  <hr/>
                </Col>
              </Row>
              <Row>
                <Col md="12" className="text-lg-center h1">
                  <span className="text-muted">03 </span><span>h </span>
                  <span className="text-muted">14 </span><span>m </span>
                  <span className="text-muted">34 </span><span>s </span>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="border p-3">
              <span className="h4">artLocus Ranking</span>
              <br/><br/>
              <Row className="mt-2 profile-progress">
                <Col md="6">
                  <Circle percent="78" strokeWidth="3"/>
                </Col>
                <Col md="6">
                  <span>Comments</span>
                  <br/>
                  <span className="h3">105</span>
                  <br/><br/>
                  <span>Ratings</span>
                  <br/>
                  <span className="h3">34</span>
                  <br/><br/>
                  <span>Progress</span>
                  <br/>
                  <span className="h3">78%</span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mx-5">
            <Col md="4" className="d-flex flex-column align-items-center justify-content-center">
              <div className="my-3 border p-3 text-center h5 profile-float shadow-sm">
                <span className="h4">artPoints:</span>
                <br/>
                <span className="text-muted">24385 </span>
                <span>pts</span>
              </div>
              <div className="my-3 border p-3 text-center h5 profile-float shadow-sm">
                <span className="h4">Uploaded:</span>
                <br/>
                <span>
            <span className="text-muted">13 </span>
            <span>videos</span>
          </span>
              </div>
            </Col>
            <Col md="8" className="border p-3 profile-chart shadow-sm">
              <VictoryChart height={200}>
                <VictoryGroup style={{data: { strokeWidth: 0, fillOpacity: 0.2 }}}>
                  <VictoryArea categories={{ x: ["last month", "last week", "this week", "today"] }}
                               style={{data: { fill: "#57A4AC", stroke: "#57A4AC" }}}
                               data={[
                                 { x: 1, y: 2 },
                                 { x: 2, y: 1 },
                                 { x: 3, y: 3 },
                                 { x: 4, y: 1 }
                               ]}
                  />
                </VictoryGroup>
              </VictoryChart>
            </Col>
          </Row>
        </Collapse>

        <Row className="mx-5 mt-5">
          <Col md="12" className="mb-5">
            <p className="h2">Hello again,</p>
            <p className="h4">here's something you might like.</p>
          </Col>
          <div className="p-5 border shadow-lg">
            <Row md="12" className="mt-3">
              {this.renderVideos()}
            </Row>
          </div>
        </Row>

      </div>
    )
  }
}

export default Profile
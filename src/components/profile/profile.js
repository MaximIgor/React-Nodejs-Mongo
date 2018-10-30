import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Circle } from 'rc-progress'
import { VictoryChart, VictoryGroup, VictoryArea } from 'victory'

const Profile = () => (

  <div className="mb-5">

    <Row className="mx-5 mb-5 d-flex py-5 align-items-center justify-content-center">
      <Col md="8" className="pl-5">
        <span className="h1">Username</span>
        <br/>
        <span className="h3">Member since 2017</span>
      </Col>
      <Col md="2">
        <Button>Revenue stats</Button>
      </Col>
      <Col md="2">
        <Button>Upgrade</Button>
      </Col>
    </Row>

    <br/><br/>

    <Row className="mx-5">
      <Col md="4" className="border p-3 shadow-lg">
        <span className="h4">Bio</span>
        <br/>
        <p className="mt-3 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam consequuntur dolorum officiis.
          Ab atque nobis quam quos recusandae! At cumque doloremque eum explicabo fugit ipsam, laboriosam molestiae quaerat quod!
        </p>
      </Col>
      <Col md="4" className="border p-3 shadow-lg d-flex flex-column justify-content-center align-items-center">
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
      <Col md="4" className="border p-3 shadow-lg">
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
        <div className="my-3 border p-3 shadow-lg text-center h5 profile-float">
          <span className="h4">artPoints:</span>
          <br/>
          <span className="text-muted">24385 </span>
          <span>pts</span>
        </div>
        <div className="my-3 border p-3 shadow-lg text-center h5 profile-float">
          <span className="h4">Uploaded:</span>
          <br/>
          <span>
            <span className="text-muted">13 </span>
            <span>videos</span>
          </span>
        </div>
      </Col>
      <Col md="8" className="border p-3 shadow-lg profile-chart">
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

  </div>
)


export default Profile
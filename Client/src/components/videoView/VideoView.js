import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import YouTube from 'react-youtube'
import TodaysSelection from '../todaysSelection/TodaysSelection'

class VideoView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {

    const opts = {
      autoplay: 1
    }

    return (
      <Container className="mt-5">
        <Row>
          <Col md="12">
            <p className="h1">{this.props.title ? this.props.title : 'Video title'}</p>
            <p className="h5">{this.props.author ? this.props.author : 'Author'}</p>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <YouTube videoId={1234} opts={opts}/>
          </Col>

          <Col md="4">
            <div>
              <p>Synopsis</p>
              <p>SYNOPSIS CONTENT</p>
              <p>Credits</p>
              <p>CREDITS CONTENT</p>
              <p>Budget</p>
              <p>BUDGET</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md="3">
            Stars
          </Col>
          <Col md="3">
            Comments
          </Col>
        </Row>

        <TodaysSelection tsTitle="Related videos" tsSubtitle="Check this related content." landing={false}/>
      </Container>
    )
  }
}

export default VideoView;
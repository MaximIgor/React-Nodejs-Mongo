import React from 'react'
import { Container } from 'reactstrap'
import YouTube from 'react-youtube'

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
      <Container>
        <h2>Video title</h2>
        <h3>Author</h3>
        
        <YouTube videoId={1234} opts={opts}/>
      </Container>
    )
  }

}

export default VideoView;
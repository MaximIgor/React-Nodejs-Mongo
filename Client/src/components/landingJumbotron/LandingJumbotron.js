import React from 'react';
import { Button } from 'reactstrap'
import YouTube from 'react-youtube'

class LandingJumbotron extends React.Component {

  constructor(props) {

    super (props)

    this.state = {

      _onReady: function (event) {
        event.target.mute()
        event.target.playVideo()
        event.target.setPlaybackQuality('default')
      }
    }
  }

  render() {

    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        color: 'white',
        disablekb: 1,
        loop: 1,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        fs: 0,
        controls: 0,
        playlist: 'katIJ9Oabb8',
        end: '163'
      }
    };

    return (
      <section className="jumbotron-main container-fluid">

        <YouTube className="jumbotron-video" opts={opts} videoId="katIJ9Oabb8" frameBorder="0"
                 onReady={this.state._onReady}/>

        <div className="jumbotron-overlay"/>

        <div className="d-flex align-items-center justify-content-center flex-column">
          <div>
            <h2 className="text-center jumbotron-title">
              The place for your cinematographic masterpiece.
            </h2>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Button className="jumbotron-button py-2 px-3">Find out more</Button>
          </div>
        </div>
      </section>
    )
  }
}

export default LandingJumbotron;
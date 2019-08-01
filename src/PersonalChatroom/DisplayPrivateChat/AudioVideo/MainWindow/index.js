import React, { Component } from 'react';
import PropTypes from 'proptypes';

let friendID;

class MainWindow extends Component {
  /**
   * Start the call with or without video
   * @param {Boolean} video
   */

   constructor(props) {
     super(props);
     this.state = {
       friendID: ''
     }
   }

   handleChange = (e) => {
     this.setState({
       [e.currentTarget.name]: e.currentTarget.value
     })
     console.log(e.currentTarget.value)
   }

  callWithVideo(video) {
    const config = { audio: true };
    config.video = video;
    return () => this.props.startCall(true, this.state.friendID, config);
  }
  render() {
    const { clientId } = this.props;
    return (
      <div className="container main-window">
        <div>
          <h3>
            Hi, your ID is
            <input type="text" className="txt-clientId" value={clientId} />
          </h3>
          <h4>Get started by calling a friend below</h4>
        </div>
        <div>
          <input type='text' placeholder='friendID' name='friendID' onChange={this.handleChange} />
          <div>
            <button
              className="btn-action fa fa-video-camera"
              onClick={this.callWithVideo(true)}
            >Call With Video</button>
            <button
              className="btn-action fa fa-phone"
              onClick={this.callWithVideo(false)}
            >Call Without Video</button>
          </div>
        </div>
      </div>
    );
  }
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;

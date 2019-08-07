import React, { Component } from 'react';
import { socket } from '../../index';
import {Form} from 'semantic-ui-react';
// import AudioVideo from './AudioVideo';
class DisplayPrivateChat extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageValue: '',
      messages: props.messages
    }
  }
  handleChange = (e) => {
    this.setState({messageValue: e.currentTarget.value});
  }
  handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(this.props)
    await console.log(this.props.roomID, 'this.props.roomID')
    await console.log(this.state.messageValue, 'messageValue');
    await console.log('hello bnknjkjnkjn')
    let privateRoute = this.props.roomID + 'Pmessage';
    await socket.emit(privateRoute, this.state.messageValue);
    this.setState({messageValue: ''});
  }

  render(){
    const messages = this.props.messages.map((message, i) => {
      console.log(message, '124321')
      return <li key={i}>{message.username}: {message.message} </li>
    });

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input type='text' value={this.state.messageValue} onChange={this.handleChange}/>
        </Form>
        <ul>
          {messages}
        </ul>
      </div>
      )
  }
}

export default DisplayPrivateChat;

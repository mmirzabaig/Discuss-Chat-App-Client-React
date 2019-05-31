import React, { Component } from 'react';
import { socket } from '../index'
import DisplayPrivateChat from './DisplayPrivateChat';

class PersonalChatroom extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      username: ''
    }
    console.log('1')
    socket.emit('send uniqueRoomID', 'send uniqueRoomID');
  }

   async componentDidMount(){
     console.log('2')

     socket.on('uniqueRoomId', async (data) => {
       console.log('3')

      await console.log(data)
      await console.log(data, 'DATA PASSED IN UNIQUE ROOM IQ!!!!!');
      await this.setState({roomID: data, display: true});
      await console.log(this.state, 'STATE')
      await console.log(this.state.roomID, 'uniqueRoomId + SETSTATTESTSEAT');
    });

    let privateRoute = this.state.roomID + 'Pmessages';

    socket.on('privateRouteMessages', async (msgObj) => {
      console.log(msgObj, '345676543');
      this.setState({
        messages: [...msgObj],
      })
    });
  }
  render(){

    console.log('4')

    return (
      <div>
        {this.state.display ? <DisplayPrivateChat roomID={this.state.roomID} messages={this.state.messages}/>: null}
      </div>
      )
  }
// componentDidMount(){
//
//  socket.on(this.state.roomID + 'Pmessages', (messages) => {
//     console.log(messages, ' messages')
//     this.setState({
//       messages: [...messages],
//     });
//   });
//
//    socket.on('uniqueRoomId', (data) => {
//     this.setState({roomID: data});
//     console.log(this.state.roomID, 'uniqueRoomId + SETSTATTESTSEAT');
//   });
//
// }
// render(){
//
//
//   return (
//     <div>
//       <DisplayPrivateChat roomID={this.state.roomID} messages={this.state.messages}/>
//     </div>
//     )
// }
}

export default PersonalChatroom;

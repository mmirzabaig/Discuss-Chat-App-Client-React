import React, { Component } from 'react'
import { Button, Card} from 'semantic-ui-react'
import { socket } from '../../index';
import swal from 'sweetalert';

class ViewRequests extends Component {
  constructor(){
    super();

    this.state = {
      data: [],
      loopedThrough: false,
      trigger: true,
    }
  }

  handleClick = (e, id) => {
    e.preventDefault();
    socket.emit('handleChosen', id.id);
    swal('Congratulations, Your Chat Has Been Scheduled!')
  }


  render(){

    const request = this.props.props.guest.map((item) => {
      return (
        <Card>
          <Card.Content>
            <Card.Meta>
                <Button id={this.props.props._id} onClick={this.handleClick}>Yes</Button>
            </Card.Meta>
            <Card.Description>{item.username}</Card.Description>
          </Card.Content>
        </Card>
      )
    })

    return(

      <div>
        <Card.Group>
              {request}
        </Card.Group>
      </div>
    )
  }
}

export default ViewRequests;

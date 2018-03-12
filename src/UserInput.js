import React, { Component } from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createUserResult, createAutoResult } from './actionCreators';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
    }
  }
  
  handleInput = event => {
    this.setState({
      input: event.target.value,
    })
  }

  handleClick = event => {
    const {input} = this.state;
    if (input > 50000 || input < 10 || isNaN(input)){
      alert("Please enter a value between 10 and 50,000.")
      this.setState({
        input: '',
      })
      return;
    }
    this.props.dispatch(createUserResult(input));
    this.setState({
      input: '',
    })
  }

  render() {
    return (
      <div style={{display:"flex", flexDirection:"row", flexGrow:1}}>
        <Container text style={{flexGrow:1}}>
          <Header as='h3'>Instructions</Header>
          <p>Input a number between 10 and 50000. Results are populated as they are calculated.</p>
        </Container>
        <div style={{flexGrow:2}}>
          <Input onChange={this.handleInput} value={this.state.input}/>
          <Button onClick={this.handleClick}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default connect()(UserInput);

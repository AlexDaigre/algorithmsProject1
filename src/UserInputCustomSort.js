import React, { Component } from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createUserResult, createAutoResult } from './actionCreators';

class UserInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
    }
  }

  componentDidMount(){
  }

  handleClick = event => {
    this.setState({loading:true});
    this.props.dispatch(createAutoResult(1000));
    this.props.dispatch(createAutoResult(10000));
    this.props.dispatch(createAutoResult(20000));
    this.setState({loading:false});
  }

  render() {
    return (
      <div style={{display:"flex", flexDirection:"row", flexGrow:1}}>
        <Container text style={{flexGrow:1}}>
          <Header as='h3'>Instructions</Header>
          <p>Click Generate to generate three Random arrays sort them using merge sort and the custom sort. The results are automatically populated here.</p>
        </Container>
        <div style={{flexGrow:2}}>
          <Button disabled={this.state.loading} onClick={this.handleClick}>Generate</Button>
        </div>
      </div>
    );
  }
}

export default connect()(UserInput);

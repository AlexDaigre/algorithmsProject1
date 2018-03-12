import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import UserInput from './UserInput';
import UserResultsTable from './ResultsTable';
import AutoResultsTable from './AutoResultsTable';
import UserInputCustomSort from './UserInputCustomSort';

class App extends Component {
  render() {
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <Header as='h1'>Part One</Header>
        <UserInput />
        <UserResultsTable />
        <Header as='h1'>Part Two</Header>
        <UserInputCustomSort />
        <AutoResultsTable />
      </div>
    );
  }
}

export default App;

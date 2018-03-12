import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

const UserResultsTable = props => (
  <Table celled unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>SL.No</Table.HeaderCell>
        <Table.HeaderCell>Array Size</Table.HeaderCell>
        <Table.HeaderCell>Algorithm Used</Table.HeaderCell>
        <Table.HeaderCell>Execution Time(milliseconds)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.UserComparisonResultsArray[0] ? (
        props.UserComparisonResultsArray.map((obj, i) => (
          <Table.Row key={i}>
            <Table.Cell>{i+1}</Table.Cell>
            <Table.Cell>{obj.arraySize}</Table.Cell>
            <Table.Cell>{obj.algorithm}</Table.Cell>
            <Table.Cell>{obj.executionTime}</Table.Cell>
          </Table.Row>
        ))
      ) : (
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
      )}
      </Table.Body>
  </Table>
)

const mapStateToProps = state => ({
  UserComparisonResultsArray: state.UserComparisonResults.resultsArray,
});

export default connect(mapStateToProps)(UserResultsTable);

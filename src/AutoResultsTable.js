import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Header } from 'semantic-ui-react';

const AutoResultsTable = props => (
  <div>
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
        {props.AutoComparisonResultsArray[0] ? (
          props.AutoComparisonResultsArray.map((obj, i) => (
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
  </div>
)

const mapStateToProps = state => ({
  AutoComparisonResultsArray: state.AutoComparisonResults.resultsArray,
});

export default connect(mapStateToProps)(AutoResultsTable);

import React, {Component} from 'react';

import Grid from './grid/Grid';

const cols = [
  {key: 'title', label: 'Title'},
  {key: 'description', label: 'Description'},
];

export default class Overview extends Component {
  rowSelectedHandler = (row) => {
    this.props.history.push(`/project/${row.id}`);
  }

  render() {
    return (
      <Grid
        cols={cols}
        data={this.props.projects}
        rowSelected={this.rowSelectedHandler} />
    );
  }
}
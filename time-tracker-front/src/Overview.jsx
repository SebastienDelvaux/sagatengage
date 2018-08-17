import React, {Component} from 'react';

import Grid from './grid/Grid';

const cols = [
  {key: 'title', label: 'Title'},
  {key: 'description', label: 'Description'},
];

export default class Overview extends Component {
  rowSelectedHandler = (row) => {
    console.log('row clicked', row);
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
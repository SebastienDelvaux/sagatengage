import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Grid from './grid/Grid';

import {getProjects} from './api/project/projectServices';

const cols = [
  {key: 'title', label: 'Title'},
  {key: 'description', label: 'Description'},
];

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {projects: []};
  }

  async componentDidMount() {
    const data = await getProjects();
    this.setState({projects: data});
  }

  rowSelectedHandler = (row) => {
    this.props.history.push(`/project/${row.id}`);
  }

  render() {
    return (
      <div>
        <h3>Time Tracker©</h3>
        <Grid
          cols={cols}
          data={this.state.projects}
          rowSelected={this.rowSelectedHandler} />
        <Link to="/new/project">Add project</Link>
      </div>
    );
  }
}
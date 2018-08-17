import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {getProject} from '../api/project/projectServices';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {project: {}};
  }

  async componentDidMount() {
    const data = await getProject(this.props.id);
    this.setState({project: data});
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Project overview</Link>
        </nav>
        <h3>{this.state.project.title}</h3>
        <p>{this.state.project.description}</p>
      </div>
    );
  }
}
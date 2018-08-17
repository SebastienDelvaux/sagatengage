import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Project extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Project overview</Link>
        </nav>
        <p>Showing project with id {this.props.id}</p>
      </div>
    );
  }
}
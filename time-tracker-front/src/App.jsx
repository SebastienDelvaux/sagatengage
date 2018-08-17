import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Overview from './Overview';
import Project from './project/Project';
import ProjectEditor from './project/ProjectEditor';

import initialData from './initialData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/project/:id"
            render={props =>
              <Project {...props} id={Number(props.match.params.id)} />
            }
          />
          <Route
            path="/new/project"
            component={ProjectEditor}
          />
          <Route
            path="*"
            render={props => 
              <Overview {...props} projects={this.state.projects} />
            }
          />
        </Switch>
      </Router>
    );
  }
}
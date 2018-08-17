import React, { Component } from 'react';

import Overview from './Overview';

import initialData from './initialData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }

  render() {
    return (
      <Overview projects={this.state.projects} />
    );
  }
}
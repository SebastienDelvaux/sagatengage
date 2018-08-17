import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {createProject} from '../api/project/projectServices';

export default class ProjectEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    await createProject(this.state.title, this.state.description);
    this.props.history.push('/');
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Project overview</Link>
        </nav>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Title: </label>
            <input type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange} />
          </p>
          <p>
            <label>Description: </label>
            <textarea 
              name="description"
              onChange={this.handleChange} />
          </p>
          <p>
            <input type="submit" value="Add project" />
          </p>
        </form>
      </div>
    );
  }
}
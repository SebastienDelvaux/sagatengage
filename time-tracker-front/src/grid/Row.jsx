import React, {Component} from 'react';
import styled from 'styled-components';

const ContentRow = styled.tr`
  &:nth-child(odd) {
    color: ${props => props.selected ? '#000000' : '#FFFFFF'};
  }
  &:nth-child(even) {
    color: ${props => props.selected ? '#000000' : '#B3B3B3'};
  }
  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
  td:first-child {
    padding-left: 10px;
  }
  &:last-child {
    td:first-child {
      border-bottom-left-radius: 10px;
    }
    td:last-child {
      border-bottom-right-radius: 10px;
    }
  }
  cursor: pointer;
  background-color: ${props => props.selected ? '#EEEEEE' : '#222222'};
  height: 35px;
`;

export default class Row extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: this.props.selected};
  }

  render() {
    return (
      <ContentRow selected={this.props.selected} onClick={this.props.onClick}>
          {this.props.children}
      </ContentRow>
    );
  }
}
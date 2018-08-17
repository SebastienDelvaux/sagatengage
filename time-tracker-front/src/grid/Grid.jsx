import React, {Component} from 'react';
import styled from 'styled-components';

import Row from './Row';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 10px;
`;
const HeaderRow = styled.tr`
  color: #FFFFFF;
  background-color: #393939;
`;
const Header = styled.th`
  &:first-child {
    border-top-left-radius: 10px;
    padding-left: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
  font-weight: normal;
`;

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.state= {selectedRowId: ''};
    this.selectRow = this.selectRow.bind(this);
  }

  renderHeaders() {
    const {cols} = this.props;// cols format [{key, label}]
    // generate our header (th) cell components
    const headers = cols.map((colData) => {
      return <Header key={colData.key}>{colData.label}</Header>;
    });
    return <HeaderRow>{headers}</HeaderRow>;
  }

  renderRows() {
    const self = this;
    const {cols, data} = this.props;// cols format [{key, label}]
    return data.map(function(item) {
      // handle the column data within each row
      var cells = cols.map((colData) => {
        return <td key={colData.key}>{item[colData.key]}</td>;
      });
      //using the id of data as key
      return (
        <Row 
          key={item.id}
          onClick={self.selectRow(item)}
          selected={self.state.selectedRowId === item.id}>
            {cells}
        </Row>
      );
    });
  }

  selectRow = (rowData) => (event) => {
    this.props.rowSelected(rowData);
    this.setState({selectedRowId: rowData.id});
  }

  render() {
    const headerComponents = this.renderHeaders();
    const rowComponents = this.renderRows();
    return (
      <Table>
        <thead>
          {headerComponents}
        </thead>
        <tbody>
          {rowComponents}
        </tbody>
      </Table>
    );
  }
}
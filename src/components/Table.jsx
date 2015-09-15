import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class Table extends React.Component {

  static propTypes = {
    accounts: React.PropTypes.array,
    accountValue: React.PropTypes.object,
  }

  render() {
    const data = !!this.props.accountValue ?
                  this.props.accounts.filter((obj) => {
                    return this.props.accountValue.indexOf(obj.value) > -1;
                  }) : [];

    return (
        <Row>
          <Col xs={12} md={12}>
            <BootstrapTable data={data}
                            height="120"
                            striped
                            hover
                            columnFilter
                            search>
              <TableHeaderColumn dataField="value"
                                 isKey
                                 dataAlign="center"
                                 dataSort>
                Value
              </TableHeaderColumn>
              <TableHeaderColumn dataField="label"
                                 dataSort>
                Label
              </TableHeaderColumn>
           </BootstrapTable>
          </Col>
        </Row>

    );
  }
}

export default Table;

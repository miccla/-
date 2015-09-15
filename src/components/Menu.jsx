import React from 'react';
import MenuActions from '../actions/MenuActions';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';

class Menu extends React.Component {

  static propTypes = {
    companies: React.PropTypes.array,
    companyValue: React.PropTypes.object,
    accounts: React.PropTypes.array,
    accountValue: React.PropTypes.object,
    accountDisabled: React.PropTypes.bool,
  }

  updateCompanyValue(newValue) {
    MenuActions.updateCompanyValue(newValue);
  }

  updateAccountValue(newValue) {
    MenuActions.updateAccountValue(newValue);
  }

  render() {
    const accountPlaceholder = !!this.props.companyValue ? 'Select an Account' : '';

    return (
        <Row>
          <Col xs={12}>
            <Select
              ref="companySelect"
              options={this.props.companies}
              value={this.props.companyValue}
              onChange={this.updateCompanyValue}
              placeholder="Select a Company..."
            />
          </Col>
          <Col xs={12}>
            <Select
              ref="accountSelect"
              options={this.props.accounts}
              value={this.props.accountValue}
              onChange={this.updateAccountValue}
              disabled={this.props.accountDisabled}
              multi
              placeholder={accountPlaceholder}
            />
          </Col>
        </Row>
    );
  }
}

export default Menu;

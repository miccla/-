import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Menu from './Menu.jsx';
import Table from './Table.jsx';
import AltContainer from 'alt/AltContainer';
import CloseStore from '../stores/CloseStore';
import { Link } from 'react-router';

class App extends React.Component {

  componentDidMount() {
    CloseStore.getCompanies();
  }

  render() {
    return (
      <Grid fluid>
        <Link to="/login">login</Link>
        <Row>
          <Col xs={12} md={3}>
            <AltContainer store={CloseStore}>
              <Menu/>
            </AltContainer>
          </Col>
          <Col xs={12} md={9}>
            <AltContainer store={CloseStore}>
              <Table/>
            </AltContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

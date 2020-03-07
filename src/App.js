import React, { Component } from 'react';
import Menu from './Menu/Menu';
import { Tab, Tabs, Row, Col } from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import Tables from './Tables/Tables';
import Users from './Users/Users';
import Pie from './Charts/Pie';
import { User } from './Api/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectionRange : {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
      users: {
        userSelected: [],
        allUsers: [],
      }
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.getReport = this.getReport.bind(this);
  }

  async componentDidMount() {
    const users = await User.getConsultors();
    this.setState({
        users: {
          userSelected: [],
          allUsers: users.data,
        }
    });
}

  handleSelect(ranges){
    console.log(ranges);
    this.setState({
      selectionRange: {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: 'selection',
      }
    });
  }

  getReport() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Menu></Menu>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="profile" title="Por Consultor">
            <Row style={{margin: '2%'}}>
              <Col sm={3}>
                <DateRange
                  ranges={[this.state.selectionRange]}
                  onChange={this.handleSelect}
                />
              </Col>
              <Col sm={9}>
                <Users users={this.state.users} getReport={this.getReport}/>
              </Col>
            </Row>
            <Row style={{margin: '2%'}}>
              <Col sm={12} style={{textAlign: 'center'}}>
                <Tables />
                <Pie />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="contact" title="Por Cliente" disabled>
            <h1>Hola</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;

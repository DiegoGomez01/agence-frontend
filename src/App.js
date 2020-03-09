import React, { Component } from 'react';
import Menu from './Menu/Menu';
import { Row, Col } from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import Users from './Users/Users';
import ViewData from './ViewData/index';
import { User } from './Api/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectionRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
      users: {
        userSelected: [],
        allUsers: [],
      },
      report: [],
      loading: false
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.getReport = this.getReport.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.getStringMonth = this.getStringMonth.bind(this);
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

  handleSelect(ranges) {
    this.setState({
      selectionRange: {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: 'selection',
      }
    });
  }

  handleSelection(user, mode) {
    const stateValues = this.searchObject(user.id);
    if (stateValues === -1 && mode === 'add') {
      this.state.users.userSelected.push(user);
    } else if (mode === 'delete') {
      this.state.users.userSelected.splice(stateValues, 1);
    }
    this.setState({
      users: {
        ...this.state.users,
        userSelected: this.state.users.userSelected
      }
    });
  }

  searchObject(item) {
    for (let i = 0; i < this.state.users.userSelected.length; i += 1) {
      if (this.state.users.userSelected[i].id === item) {
        return i;
      }
    }
    return -1;
  }

  async getReport() {
    this.setState({
      loading: true
    })
    let start_date = new Date(this.state.selectionRange.startDate);
    start_date = `${start_date.getFullYear()}-${start_date.getMonth() + 1}-${start_date.getDay() + 1}`;
    let end_date = new Date(this.state.selectionRange.endDate);
    end_date = `${end_date.getFullYear()}-${end_date.getMonth() + 1}-${end_date.getDay() + 1}`

    const reports = [];
    for (var i = 0; i < this.state.users.userSelected.length; i++) {
      const user = this.state.users.userSelected[i];
      let report = await User.getReportConsultors(user.id, start_date, end_date);
      reports.push({
        id: user.id,
        name: user.name,
        report: report.data,
      })
    }
    this.setState({
      report: reports,
      loading: false
    });
  }

  getStringMonth(number) {
    switch (number) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
      default:
        return '';
    }
  }

  render() {
    return (
      <div>
        <Menu></Menu>
        <Row style={{ margin: '2% 2% 0% 2%' }} className='d-flex justify-content-center'>
          <Col sm={3} className='text-center'>
            <DateRange
              ranges={[this.state.selectionRange]}
              onChange={this.handleSelect}
            />
          </Col>
          <Col sm={9}>
            <Users users={this.state.users} getReport={this.getReport} handleSelection={this.handleSelection} loading={this.state.loading}/>
          </Col>
        </Row>
        <Row style={{ margin: '0% 2% 2% 2%' }}>
          <Col sm={12} style={{ textAlign: 'center' }}>
            <ViewData report={this.state.report} selectionrange={this.state.selectionRange} getstringmonth={this.getStringMonth}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

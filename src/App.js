import React, { Component } from 'react';
import Menu from './Menu/Menu';
import { Tab, Tabs } from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import { moment } from 'moment';
import Test from './Api/Test';
import PropTypes from 'prop-types';

class App extends Component {

  // async componentDidMount() {
  //   console.log(await Test.getDataTest());
  // }

  constructor(props) {
    super(props);
    this.state = {
      selectionRange : {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
    }
    this.handleSelect = this.handleSelect.bind(this);
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

  render() {
    return (
      <div>
        <Menu></Menu>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="profile" title="Por Consultor">
          <DateRange
            ranges={[this.state.selectionRange]}
            onChange={this.handleSelect}
          />
          </Tab>
          <Tab eventKey="contact" title="Por Cliente" disabled>
            <h1>Hola</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;

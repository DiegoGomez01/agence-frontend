import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import PropTypes from 'prop-types';

class Pie extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <Chart
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Work', 11],
                        ['Eat', 2],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}

Pie.propTypes = {

};

export default Pie;
import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import PropTypes from 'prop-types';

class Pie extends Component {
    render() {
        console.log(this.props.report);
        const data = [['consultor', 'Total Receita Liquida']];
        for(let i = 0; i < this.props.report.length; i++) {
            data.push([this.props.report[i].name, this.props.report[i].report.sumReceitaLiquida]);
        }
        return (
            <div className="d-flex justify-content-center">
                <Chart
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: 'Receita Liquida',
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}

Pie.propTypes = {
    report: PropTypes.array.isRequired
};

export default Pie;
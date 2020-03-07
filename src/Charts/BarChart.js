import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import PropTypes from 'prop-types';

let data = [[]];

class BarChart extends Component {

    custoFixoMedio = 0;

    getData() {
        data = [[]];
        data[0].push('Month');
        for(let i = 0; i < this.props.report.length; i++) {
            data[0].push(this.props.report[i].name);
            this.custoFixoMedio = this.props.report[i].report.custoFixo[0].brut_salario;
            this.getReportUser(this.props.report[i].report.receitaLiquita, i);
        }
        this.custoFixoMedio /= this.props.report.length;
        data[0].push('average');
        this.concatAverage(this.props.report[0].report.receitaLiquita.length);
        console.log(data);
    }

    getReportUser(receitaLiquita, index) {
        if(index === 0) {
            for(let i = 0; i < receitaLiquita.length; i++) {
                data.push([`${receitaLiquita[i].mes} de ${receitaLiquita[i].year}`, receitaLiquita[i].total]);
            }
        } else {
            for(let i = 0; i < receitaLiquita.length; i++) {
                data[i+1].push(receitaLiquita[i].total);
            }
        }
    }

    concatAverage(lenReceitaLiquita) {
        for(let i = 0; i < lenReceitaLiquita; i++) {
            data[i+1].push(this.custoFixoMedio);
        }
    }

    render() {
        this.getData();
        console.log(this.props.report);
        return (
            <div className="d-flex justify-content-center">
                <Chart
                    height={'300px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: 'Receita Liquida Por Consultor',
                        vAxis: { title: 'Receita Liquida' },
                        hAxis: { title: 'Month' },
                        seriesType: 'bars',
                        series: { [data[0].length - 1]: { type: 'line' } },
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}

BarChart.propTypes = {
    report: PropTypes.array.isRequired
};

export default BarChart;
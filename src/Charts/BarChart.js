import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import PropTypes from 'prop-types';

let data;

class BarChart extends Component {

    custoFixoMedio = 0;

    getData() {
        data = [['Date']];
        let start_date = new Date(this.props.selectionrange.startDate);
        let end_date = new Date(this.props.selectionrange.endDate);

        let iMonth = start_date.getMonth() + 1;
        let eMonth = end_date.getMonth() + 1;
        let iYear = start_date.getFullYear();
        let eYear = end_date.getFullYear();;

        const reports = this.props.report;

        const names = reports.map(e => e.name);

        data[0] = data[0].concat(names);
        data[0].push("Average");
        while (iMonth <= eMonth && iYear <= eYear) {
            const totalsDate = [`${this.props.getstringmonth(iMonth)} de ${iYear}`];
            let custoFixo = 0;
            for (const p of reports) {
                // eslint-disable-next-line no-loop-func
                const aux = p.report.receitaLiquita.filter(r => r.month === iMonth && r.year === iYear).reduce((accum, current) => accum + current.total, 0);
                custoFixo += p.report.custoFixo[0].brut_salario;
                totalsDate.push(aux);
            }
            totalsDate.push(custoFixo / reports.length);
            data.push(totalsDate);
            iMonth = (iMonth + 1) % 13;
            iMonth = (iMonth === 0) ? iMonth + 1 : iMonth;
            iYear = (iMonth === 1) ? iYear + 1 : iYear;
        }
    }

    render() {
        this.getData();
        return (
            <div className="d-flex justify-content-center">
                <Chart
                    height={'300px'}
                    width={'400px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: 'Receita Liquida Por Consultor',
                        vAxis: { title: 'Receita Liquida' },
                        hAxis: { title: 'Month' },
                        seriesType: 'bars',
                        series: { [data[0].length - 2]: { type: 'line' } },
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
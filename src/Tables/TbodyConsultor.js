import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

class TbodyConsultor extends Component {

  bodyTable = () => {
    let body = [];
    for (let i = 0; i < this.props.data.receitaLiquita.length; i++) {
      const month = `${this.getMonth(this.props.data.receitaLiquita[i].month)} de ${this.props.data.receitaLiquita[i].year}`;
      let row = [];
      row.push(<td key={0}>{month}</td>);
      const content = [
        this.props.data.receitaLiquita.length > 0 ? this.props.data.receitaLiquita[i].total : 0,
        this.props.data.custoFixo.length > 0 ? -this.props.data.custoFixo[0].brut_salario : 0,
        this.props.data.comissao.length > 0 ? this.props.data.comissao[i].total : 0,
        this.props.data.lucro.length > 0 ? this.props.data.lucro[i].total : 0,
      ];
      for (let j = 0; j < 4; j++) {
        row.push(<td key={j + 1}>{
          <NumberFormat value={content[j]} displayType={'text'} thousandSeparator={true} prefix={'R$ '} />
        }</td>);
      }
      body.push(<tr key={i}>{row}</tr>)
    }
    return body
  }

  getMonth(number) {
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
      <tbody>
        {this.bodyTable()}
      </tbody>
    );
  }
}

TbodyConsultor.propTypes = {
 data: PropTypes.object.isRequired,
};

export default TbodyConsultor;
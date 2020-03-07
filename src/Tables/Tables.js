import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap'

class Tables extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover responsive style={{textAlign: 'center'}}>
                    <thead>
                        <tr>
                            <th colSpan="5">NOMBRE USUARIO</th>
                        </tr>
                        <tr>
                            <th>Periodo</th>
                            <th>Receita Líquida</th>
                            <th>Custo Fixo</th>
                            <th>Comissão</th>
                            <th>Lucro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

Tables.propTypes = {

};

export default Tables;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap'

class Tables extends Component {
    render() {
        const Tbody = this.props.tbody;
        return (
            <div>
                <Table hover responsive style={{ textAlign: 'center' }}>
                    <thead>
                        <tr style={{backgroundColor: 'rgba(0,0,0,.05)'}}>
                            {
                                this.props.headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))
                            }
                        </tr>
                    </thead>
                        <Tbody
                            data={this.props.data}
                            getstringmonth={this.props.getstringmonth}
                        />
                </Table>
            </div>
        );
    }
}

Tables.propTypes = {
    headers: PropTypes.array.isRequired
};

export default Tables;
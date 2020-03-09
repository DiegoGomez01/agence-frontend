import React, { Component } from 'react';
import CardSelect from './CardSelect';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Users extends Component {

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Row className='w-100'>
                        <Col md={5}>
                            <CardSelect title='Seleccionar' users={this.props.users.allUsers} onClick={this.props.handleSelection} action='add' />
                        </Col>
                        <Col md={2} className='text-center'>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/twoway-direction-left-riht-arrow-1-3204.png" width="50" height="50" alt=''/>
                        </Col>
                        <Col md={5}>
                            <CardSelect title='Seleccionados' users={this.props.users.userSelected} onClick={this.props.handleSelection} action='delete' />
                        </Col>
                    </Row>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '90%', margin: '2% 0%'}}>
                    <Button variant="success" onClick={this.props.getReport} style={{width: '100px'}}>
                        {this.props.loading ? <Spinner animation="border" variant="light" size="sm"/>: 'Get Report'}
                    </Button>
                </div>
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired,
    getReport: PropTypes.func.isRequired,
    handleSelection: PropTypes.func.isRequired,
};

export default Users;
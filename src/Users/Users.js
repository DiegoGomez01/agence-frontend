import React, { Component } from 'react';
import CardSelect from './CardSelect';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Users extends Component {

    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(user, mode) {
        const stateValues = this.searchObject(this.state.userSelected, user.id);
        if (stateValues === -1 && mode === 'add') {
            this.state.userSelected.push(user);
        } else if (mode === 'delete') {
            this.state.userSelected.splice(stateValues, 1);
        }
        this.setState({
            userSelected: this.state.userSelected
        });
    }

    searchObject(collect, item) {
        for (let i = 0; i < collect.length; i += 1) {
            if (collect[i].id === item) {
                return i;
            }
        }
        return -1;
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Row>
                        <Col xs={12} md={5}>
                            <CardSelect title='Seleccionar' users={this.props.users.allUsers} onClick={this.handleSelection} action='add' />
                        </Col>
                        <Col xs={12} md={1}>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/twoway-direction-left-riht-arrow-1-3204.png" width="50" height="50" alt=''/>
                        </Col>
                        <Col xs={12} md={5}>
                            <CardSelect title='Seleccionados' users={this.props.users.userSelected} onClick={this.handleSelection} action='delete' />
                        </Col>
                    </Row>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '90%'}}>
                    <Button variant="success" onClick={this.props.getReport}>Get Report</Button>
                </div>
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired,
    getReport: PropTypes.func.isRequired,
};

export default Users;
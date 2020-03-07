import React, { Component } from 'react';
import { Icon, Header, Card, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class CardSelect extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Content>
                        <Header size="small" textAlign="center">{this.props.title}</Header>
                    </Card.Content>
                    <Card.Content>
                        <List selection animated verticalAlign="middle" style={{height: '25vh', overflowY: 'scroll'}}>
                            {this.props.users.map((user) => {
                                const item = (
                                    <List.Item key={user.id} onClick={() => { this.props.onClick(user, this.props.action); }}>
                                        <Icon name="user" />
                                        <List.Content>
                                            <List.Header>{user.name}</List.Header>
                                        </List.Content>
                                    </List.Item>
                                );
                                return item;
                            })}
                        </List>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

CardSelect.propTypes = {
    title: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
};

export default CardSelect;
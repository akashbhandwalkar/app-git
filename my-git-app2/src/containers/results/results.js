import React, { Component } from 'react';
import './results.css';
import UserDetails from './../../components/userDetails';

export default class Results extends Component {
  render() {
    const { users } = this.props;
    return (
        <div className="Result-layout">
            <span className="total"> Total Results: {users && users.length} </span>
            {
                users.map( (user, index) =>{
                    return(<UserDetails key={index} user={user}/>)
                })
            }
        </div>
    );
  }
}

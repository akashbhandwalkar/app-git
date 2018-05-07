import React, { Component } from 'react';
import './../App.css';
export default class UserDetails extends Component {
  render() {
    const { user } = this.props;
    return (
        <div className="User-details">
           <div className="row">
            <div className="col-sm-3">
                <img className="User-avatar" src={user && user.avatar_url ? user.avatar_url : ''} />
            </div>
            <div className="col-sm-6">
                <b> { user.login } </b>
            </div>
            <div className="col-sm-2">
                <button className="Details-button" onClick={this.seeDetails} > Details </button>
            </div>
            
           </div>
        </div>
    );
  }
}

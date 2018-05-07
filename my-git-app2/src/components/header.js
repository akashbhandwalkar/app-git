import React, { Component } from 'react';
import './../App.css';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterUser: ''
    }
  }

  onChange = (event) =>{
    const inputedUser =  event.target.value;
    this.setState({
      inputedUser
    });
    this.props.filterUsers(inputedUser);
  }

  render() {
    const { inputedUser } = this.state;
    return (
        <header className="App-header">
          <input className="search" type="text" />
          <input value={inputedUser} className="search" onChange={this.onChange} type="text" />
        </header>
    );
  }
}

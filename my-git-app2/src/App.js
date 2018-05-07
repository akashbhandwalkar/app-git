import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Results from './containers/results/results';
import { connect } from 'react-redux';
import { getUsers } from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    if(this.props.getUsers && typeof this.props.getUsers == 'function')
    this.props.getUsers('akash');
  }

  
  filterUsers = (input) =>{
    console.log("input==>", input);
  }

  render() {
    const { users } = this.props.usersState;
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers}/>
        <Results users={users}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersState: state.usersReducer
});

const mapDispatchToProps = dispatch => ({
  getUsers: text => dispatch(getUsers(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

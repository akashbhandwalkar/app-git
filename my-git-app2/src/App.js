import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Results from './containers/results/results';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import Loader from './components/Loader';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    if(this.props.getUsers && typeof this.props.getUsers == 'function')
      this.props.getUsers('a');
  }

  
  filterUsers = (input) =>{
    this.props.getUsers(input);
  }

  render() {
    const { users, loading } = this.props.usersState;
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers}/>
        {
          loading ?
          <Loader />
          :
          <Results users={users}/>
        }
        
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

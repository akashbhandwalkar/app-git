import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Results from './containers/results/results';
import { connect } from 'react-redux';
import { getUsers } from './actions';

const data = [
  {
    "login": "HashNuke",
    "id": 84005,
    "avatar_url": "https://avatars0.githubusercontent.com/u/84005?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HashNuke",
    "html_url": "https://github.com/HashNuke",
    "followers_url": "https://api.github.com/users/HashNuke/followers",
    "following_url": "https://api.github.com/users/HashNuke/following{/other_user}",
    "gists_url": "https://api.github.com/users/HashNuke/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HashNuke/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HashNuke/subscriptions",
    "organizations_url": "https://api.github.com/users/HashNuke/orgs",
    "repos_url": "https://api.github.com/users/HashNuke/repos",
    "events_url": "https://api.github.com/users/HashNuke/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HashNuke/received_events",
    "type": "User",
    "site_admin": false,
    "score": 91.0244
  },
  {
    "login": "akash",
    "id": 14871,
    "avatar_url": "https://avatars0.githubusercontent.com/u/14871?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akash",
    "html_url": "https://github.com/akash",
    "followers_url": "https://api.github.com/users/akash/followers",
    "following_url": "https://api.github.com/users/akash/following{/other_user}",
    "gists_url": "https://api.github.com/users/akash/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akash/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akash/subscriptions",
    "organizations_url": "https://api.github.com/users/akash/orgs",
    "repos_url": "https://api.github.com/users/akash/repos",
    "events_url": "https://api.github.com/users/akash/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akash/received_events",
    "type": "User",
    "site_admin": false,
    "score": 89.38982
  },
  {
    "login": "akashnimare",
    "id": 2263909,
    "avatar_url": "https://avatars0.githubusercontent.com/u/2263909?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akashnimare",
    "html_url": "https://github.com/akashnimare",
    "followers_url": "https://api.github.com/users/akashnimare/followers",
    "following_url": "https://api.github.com/users/akashnimare/following{/other_user}",
    "gists_url": "https://api.github.com/users/akashnimare/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akashnimare/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akashnimare/subscriptions",
    "organizations_url": "https://api.github.com/users/akashnimare/orgs",
    "repos_url": "https://api.github.com/users/akashnimare/repos",
    "events_url": "https://api.github.com/users/akashnimare/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akashnimare/received_events",
    "type": "User",
    "site_admin": false,
    "score": 77.68379
  }
]
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
    console.log("props==>", this.props);
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers}/>
        <Results users={data}/>
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

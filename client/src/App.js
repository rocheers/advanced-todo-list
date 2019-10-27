import React, { Component } from 'react'
import axios from 'axios';
import Row from './Components/Row';
import Card from './Components/Card';
import Header from './Components/Header';
import { isEmpty } from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: {},
      currentRepos: [],
      loading: false
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users?per_page=10')
      .then(res => this.setState({ users: res.data }));
  }

  handleClick = (username) => () => {
    let userPromise = axios.get(`https://api.github.com/users/${username}`);
    let reposPromise = axios.get(`https://api.github.com/users/${username}/repos`);
    this.setState({ loading: true }, () => {
      Promise
        .all([userPromise, reposPromise])
        .then(([user, repos]) => {
          this.setState({
            currentUser: user.data,
            currentRepos: repos.data.slice(0, 10),
            loading: false
          });
        });
    });
  }

  render() {
    let { currentRepos, currentUser, loading, users } = this.state;
    return (
      <div>
        <Header title="GitHub Tiny App" />
        <div className="ui two column grid container">
          <div className="column">
            <div className="ui middle aligned selection list">
              {users.map(user => {
                return <Row key={user.id} {...user} handleClick={this.handleClick} />
              })}
            </div>
          </div>
          <div className="ui column raised segment">
            {loading ? (
              <div class="ui active dimmer">
                <div class="ui indeterminate text loader">Preparing user info...</div>
              </div>
            ) : !isEmpty(currentUser) && <Card {...currentUser} repos={currentRepos} />}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import GitHub from 'github-api';
import fetch from 'isomorphic-fetch';

class Dashboard extends Component {
  componentDidMount() {
    const gh = new GitHub({
      token: process.env.REACT_APP_GITHUB_KEY
    });

    gh.getUser('themarquisdesheric')
      .listRepos()
      .then(repos => repos.data.filter(repo => 
        repo.owner.login === 'themarquisdesheric' && 
        repo.name !== 'incubator-datafu'))
      .then(repos => {
        
        console.log(repos);
      });
  }

  render() {
    return (
      <article id="dashboard">
      </article>
    );
  }
}

export default Dashboard;

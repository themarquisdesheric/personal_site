import React, { Component } from 'react';
import GitHub from 'github-api';
import fetch from 'isomorphic-fetch';
import calcLangTotals from '../utilities';

class Dashboard extends Component {
  componentDidMount() {
    const gh = new GitHub({
      token: process.env.REACT_APP_GITHUB_KEY
    });

    gh.getUser('themarquisdesheric')
      .listRepos()
      .then(repos => repos.data.filter(repo => 
        repo.owner.login === 'themarquisdesheric' && 
        repo.name !== 'incubator-datafu' &&
        repo.name !== 'learning_journal'))
      .then(repos => {
        const headers = new Headers({
          Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`,
        });
        const totals = {};
        // get language statistics for each repo
        const promises = repos.map(repo => 
          fetch(repo.languages_url, { headers })
            .then(res => res.json())
            .then(repoStats => calcLangTotals(repoStats, totals))
        );

        Promise.all(promises)
          .then(resolved => console.log('totals from promise.all:', totals))
          .catch(err => console.error('whoops!', err));

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

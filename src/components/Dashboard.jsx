import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { calcLangTotals, calcRepoTotal, calcLangPercentages } from '../utilities';

class Dashboard extends Component {
  state = {
    langPercentages: null
  }

  componentDidMount() {
    const headers = new Headers({
      Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`,
    });

    fetch('https://api.github.com/users/themarquisdesheric/repos?per_page=100', { headers })
      .then(res => res.json())
      .then(repos => repos.filter(repo => 
        repo.owner.login === 'themarquisdesheric' && 
        repo.name !== 'incubator-datafu'))
      .then(repos => {
        const langTotals = {
          total: 0
        };
        // get language statistics for each repo
        const promises = repos.map(repo => 
          fetch(repo.languages_url, { headers })
            .then(res => res.json())
            .then(repoStats => {
              calcLangTotals(repoStats, langTotals);
              
              const repoTotal = calcRepoTotal(repoStats);
  
              langTotals.total += repoTotal;
  
              return repo;
            }));

        Promise.all(promises)
          .then( () => {
            const langPercentages = calcLangPercentages(langTotals);

            this.setState({ langPercentages });
          })
          .catch(err => console.error('whoops!', err));
      });
  }

  render() {
    const { langPercentages } = this.state;
    return (
      <article id="dashboard">
        { langPercentages ? JSON.stringify(langPercentages) : null}
      </article>
    );
  }
}

export default Dashboard;

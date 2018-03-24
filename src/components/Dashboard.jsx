import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { calcLangTotals, calcRepoTotal, calcLangPercentages } from '../utilities';

class Dashboard extends Component {
  state = {
    pieChartTotals: null
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
        const pieChartTotals = {};
        // get language statistics for each repo
        const promises = repos.map(repo => 
          fetch(repo.languages_url, { headers })
            .then(res => res.json())
            .then(repoStats => calcLangTotals(repoStats, pieChartTotals)));

        Promise.all(promises)
          .then( () => this.setState({ pieChartTotals }))
          .catch(err => console.error('whoops!', err));
      });
  }

  render() {
    const { pieChartTotals } = this.state;
    return (
      <article id="dashboard">
        { pieChartTotals ? JSON.stringify(pieChartTotals) : null}
      </article>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { GridLoader } from 'react-spinners';
import fetch from 'isomorphic-fetch';
import { calcLangTotals, calcRepoTotal, calcLangPercentages } from '../utilities';
import PieChart from './PieChart';

class Dashboard extends Component {
  state = {
    langPercentages: null,
    inView: false,
    stats: {
      mongo: 0,
      node: 0,
      express: 0,
      react: 0
    },
    error: false
  }

  componentDidMount() {
    const headers = new Headers({
      Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`,
    });
    
    fetch('https://api.github.com/users/themarquisdesheric/repos?per_page=100', { headers })
      .then(res => res.json())
      .then(repos => 
        repos.filter(repo => 
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
          .then(repos => {
            const langPercentages = calcLangPercentages(langTotals);

            // set state to render pie chart, then fetch stack stats
            this.setState({ langPercentages }, () => {
              const promises = repos.map(repo =>
                // fetch content tree for each repo
                fetch(`https://api.github.com/repos/themarquisdesheric/${repo.name}/git/trees/master?recursive=1`
                  , { headers })
                  .then(res => res.json())
                  .then(res => {
                    const packageJSONIndex = res.tree.findIndex(item => item.path.includes('package.json'));
      
                    if (packageJSONIndex > -1) {
                      repo.node = true;
                      // fetch package.json
                      return fetch(res.tree[packageJSONIndex].url, { headers })
                        .then(res => res.json())
                        .then(encoded => {
                          // convert from base64 encoding, then stringify to search for keywords
                          const packageJSON = JSON.stringify(window.atob(encoded.content));
      
                          if (packageJSON.includes('mongo')) repo.mongo = true;
                          if (packageJSON.includes('express')) repo.express = true;
                          if (packageJSON.includes('react')) repo.react = true;
      
                          return repo;
                        });
                    } 
                    else return repo;
                  }));
              
              Promise.all(promises)
                .then(projects => {
                  const stats = projects.reduce( (totals, project) => {
                    if (project.mongo) totals.mongo++;
                    if (project.node) totals.node++;
                    if (project.express) totals.express++;
                    if (project.react) totals.react++;
                    
                    return totals;
                  }, { ...this.state.stats });
      
                  this.setState({ stats });
                });
            });
          });
      })
      .catch(err => {
        this.setState({ error: true });

        console.log('Something went wrong... hiding github dashboard');
      });
  }
  
  render() {
    const { langPercentages, inView, stats, error } = this.state;

    return error 
      ? null
      : <article id="dashboard">
          <main>
            <Waypoint onEnter={() => this.setState({ inView: true })} />
        
            <header>
              <h2 className="title">Github Dashboard</h2>
            </header>
        
            {langPercentages && inView
              ? <PieChart langTotals={langPercentages} inView={inView} stats={stats} /> 
              : <div id="chart-loader">
                  <GridLoader loading={!langPercentages} color={'rgba(53, 222, 113, 1)'} />
                </div>  
            }
          </main>
        </article>
  }
}

export default Dashboard;

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
      svelte: 0,
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
      .then(repos => {
        const langTotals = {
          total: 0
        };
        
        repos = repos.filter(repo => 
          repo.owner.login === 'themarquisdesheric' && 
          repo.name !== 'incubator-datafu'
        )
        // get language statistics for each repo
        const promises = repos.map(repo => 
          fetch(repo.languages_url, { headers })
            .then(res => res.json())
            .then(repoStats => {
              delete repoStats.HTML
              delete repoStats.CSS
              delete repoStats.SCSS
              delete repoStats.Svelte
              
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
              const promises = repos.map(repo => {
                const branch = Number(repo.created_at.slice(0,4)) >= 2021 ||
                  repo.name === 'specimen-magazine'
                    ? 'main'
                    : 'master';
                // fetch content tree for each repo
                return fetch(
                  `https://api.github.com/repos/themarquisdesheric/${repo.name}/git/trees/${branch}?recursive=1`,
                  { headers }
                )
                  .then(res => res.json())
                  .then(res => {
                    if (!res.tree) return repo

                    const packageJSONIndex = res.tree.findIndex(item => item.path.includes('package.json'));
      
                    if (packageJSONIndex > -1) {
                      // fetch package.json
                      return fetch(res.tree[packageJSONIndex].url, { headers })
                        .then(res => res.json())
                        .then(encodedPackageJSON => {
                          // convert package.json from base64 encoding, then  search for keywords
                          const { dependencies = {}, devDependencies = {} } = JSON.parse(window.atob(encodedPackageJSON.content));
                          
                          if (dependencies['mongodb'] || dependencies['mongoose']) repo.mongo = true;
                          if (dependencies['express']) repo.express = true;
                          if (dependencies['react']) repo.react = true;
                          if (devDependencies['svelte']) repo.svelte = true;
      
                          return repo;
                        });
                    } 
                    else return repo;
                  })
              });
              
              Promise.all(promises)
                .then(projects => {
                  const stats = projects.reduce( (totals, project) => {
                    if (project.mongo) totals.mongo++;
                    if (project.express) totals.express++;
                    if (project.react) totals.react++;
                    if (project.svelte) totals.svelte++;
                    
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

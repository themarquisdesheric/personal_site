import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { GridLoader } from 'react-spinners';
import AppCounter from './AppCounter';
import { sortLanguagePercentages } from '../utilities'

Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontSize = 14;

const options = {
  legend: {
    labels: {
      padding: 20
    }
  },
  animation: {
    animateRotate: true
  },
  title: {
    display: true,
    position: 'bottom',
    text: 'Data obtained via the GitHub API',
  },
  tooltips: false,
};

class PieChart extends Component {
  componentDidMount() {
    const { languages, numericalDataInDescendingOrder } = sortLanguagePercentages(this.props.langTotals)
    
    const chart = new Chart(this.canvas, {
      type: 'pie',
      options,
      data: {
        labels: languages,
        datasets: [{
          backgroundColor: ['rgb(53, 222, 113)', 'rgb(171, 102, 255)', 'rgb(70, 124, 255)', 'rgb(255, 206, 10)', 'rgb(255, 10, 214)'],
          data: numericalDataInDescendingOrder,
          borderColor: 'black',
          borderWidth: 2
        }]
      }
    });

    this.chart = chart;
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render () {
    const { stats } = this.props;

    return (
      <div id="chart">
        <div className="logo-wrapper">
          <img src="/github-large.png" alt="github logo for pie chart" />
          <canvas ref={canvas => this.canvas = canvas} />        
        </div>
        
        <section>
          {stats.react
            ? Object.entries(stats).map( ([key, val]) => 
                <AppCounter key={key} type={key} apps={val} />
              )
            // loading spinners for stats
            : Object.keys(stats).map(stat => 
                <div key={stat} className={`app-counter ${stat}`}>
                  <GridLoader loading={!stats.react} color={'rgb(53, 222, 113)'} />
                </div>
              )
          }
        </section>
      </div>
    );
  }
}

PieChart.propTypes = {
  langTotals: PropTypes.shape({
    HTML: PropTypes.number,
    CSS: PropTypes.number,
    JavaScript: PropTypes.number
  }).isRequired,
  stats: PropTypes.shape({
    svelte: PropTypes.number.isRequired,
    mongo: PropTypes.number.isRequired,
    express: PropTypes.number.isRequired,
    react: PropTypes.number.isRequired
  }).isRequired
};

export default PieChart;

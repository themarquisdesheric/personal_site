import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import pieceLabel from 'chart.piecelabel.js';
import AppCounter from './AppCounter';

class PieChart extends Component {
  componentDidMount() {
    const labels = [];
    const values = []; 
    
    Object.entries(this.props.langTotals)
      .forEach(([key, val]) => {
        if (key === 'JavaScript') labels.push('JS');
        else labels.push(key);

        values.push(val);
      });

    Chart.defaults.global.defaultFontColor = '#000';
    Chart.defaults.global.defaultFontSize = 14;

    const options = {
      plugins: [
        pieceLabel
      ],
      pieceLabel: {
        render: ({ label, value }) => 
          `${value}% ${label}`,
        fontStyle: 'bold'
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
      cutoutPercentage: this.calcCutOutSize(window.innerWidth)
    };
    
    const chart = new Chart(this.canvas, {
      type: 'pie',
      options,
      data: {
        labels,
        datasets: [{
          backgroundColor: ['rgba(53, 222, 113, 1)', 'rgba(171, 102, 255, 1)', 'rgba(70, 124, 255, 1)'],
          data: values,
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

  setBackground = (screenX) => {
    if (screenX > 850) {
      return `url('github-large.png') no-repeat 50% ${this.calcBackgroundOffset(screenX)}`;
    } else if (screenX > 700) {
      return `url('github-small.png') no-repeat 50% ${this.calcBackgroundOffset(screenX)}`;
    } else return 'transparent';
  }

  calcCutOutSize = (screenX) => {
    if (screenX > 1340) return 24;
    else if (screenX > 1270) return 26;
    else if (screenX > 1200) return 28;
    else if (screenX > 1150) return 29;
    else if (screenX > 1080) return 31;
    else if (screenX > 1010) return 34;
    else if (screenX > 970) return 35;
    else if (screenX > 900) return 39;
    else if (screenX > 850) return 43;
    else if (screenX > 768) return 24;
    else if (screenX > 700) return 28;
    else return 0;
  }

  calcBackgroundOffset = (screenX) => {
    if (screenX > 1080) return '49.6%';
    else if (screenX > 850) return '49%';
    else if (screenX > 800) return '49.5%';
    else return '49.2%';
  }

  render () {
    const { stats } = this.props;

    return (
      <div id="chart">
        <canvas 
          ref={canvas => this.canvas = canvas} 
          style={{ 
            background: this.setBackground(window.innerWidth) 
          }}
        />        

        {stats.node && Object.entries(stats).map( ([key, val]) => 
          <AppCounter key={key} type={key} apps={val} />
        )}
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
    node: PropTypes.number.isRequired,
    mongo: PropTypes.number.isRequired,
    express: PropTypes.number.isRequired,
    react: PropTypes.number.isRequired
  }).isRequired
};

export default PieChart;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import pieceLabel from 'chart.piecelabel.js';

class PieChart extends Component {
  componentDidMount() {
    const labels = [];
    const values = []; 
    
    Object.entries(this.props.langTotals)
      .forEach(([key, val]) => {
        labels.push(key);
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
        text: 'Information obtained via the GitHub API',
      },
      tooltips: false
    };

    const chart = new Chart(this.canvas, {
      type: 'pie',
      options,
      data: {
        labels,
        datasets: [{
          backgroundColor: ['rgba(156, 39, 176, 0.6)', 'rgba(233, 30, 99, 0.6)', 'rgba(33, 150, 243, 0.6)'],
          data: values
        }]
      }
    });

    this.chart = chart;
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render () {
    return (
      <div id="chart">
        <canvas ref={canvas => this.canvas = canvas} />        
      </div>
    );
  }
}

PieChart.propTypes = {
  langTotals: PropTypes.shape({
    HTML: PropTypes.number,
    CSS: PropTypes.number,
    JavaScript: PropTypes.number
  }).isRequired
};

export default PieChart;

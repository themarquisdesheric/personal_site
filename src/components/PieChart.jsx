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
        text: 'Information obtained via the GitHub API',
      },
      tooltips: false,
      rotation: Math.PI * 2.565,
      cutoutPercentage: this.calcCutOutSize(window.innerWidth)
    };
    
    const chart = new Chart(this.canvas, {
      type: 'pie',
      options,
      data: {
        labels,
        datasets: [{
          backgroundColor: ['rgba(156, 39, 176, 1)', 'rgba(233, 30, 99, 1)', 'rgba(33, 150, 243, 1)'],
          data: values
        }]
      }
    });

    this.chart = chart;
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  calcCutOutSize = (screenX) => {
    if (screenX > 1320) return 25;
    else if (screenX > 1270) return 26;
    else if (screenX > 1200) return 30;
    else if (screenX > 1100) return 31;
    else if (screenX > 1000) return 34;
    else if (screenX > 900) return 39;
    else if (screenX > 850) return 44;
    else if (screenX > 800) return 47;
    else if (screenX > 768) return 51;
    else if (screenX > 700) return 29; 
    else if (screenX > 650) return 34; 
    else if (screenX > 600) return 38; 
    else if (screenX > 550) return 42;
    else if (screenX > 520) return 47;
    else if (screenX > 500) return 51;
    else if (screenX > 470) return 55;
    else if (screenX >= 400) return 0;
    else return 0;
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

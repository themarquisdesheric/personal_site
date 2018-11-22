import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import pieceLabel from 'chart.piecelabel.js';
import { GridLoader } from 'react-spinners';
import AppCounter from './AppCounter';

class PieChart extends Component {
  componentDidMount() {
    const labels = [];
    const values = []; 
    
    // set chart labels
    Object.entries(this.props.langTotals)
      .forEach( ([key, val]) => {
        if (key === 'JavaScript') labels.push('JS');
        else labels.push(key);

        values.push(val);
      });

    Chart.defaults.global.defaultFontColor = '#000';
    Chart.defaults.global.defaultFontSize = 14;
    
    // lines 25 - 75 extend the legend so we can fine tune the styling
    Chart.NewLegend = Chart.Legend.extend({
      afterFit: function() {
        // push the legend right
        this.width = this.width + 20;
      }
    });
    
    const createNewLegendAndAttach = (chartInstance, legendOpts) => {
      var legend = new Chart.NewLegend({
        ctx: chartInstance.chart.ctx,
        options: legendOpts,
        chart: chartInstance
      });
      
      if (chartInstance.legend) {
        Chart.layoutService.removeBox(chartInstance, chartInstance.legend);
        delete chartInstance.newLegend;
      }
      
      chartInstance.newLegend = legend;
      Chart.layoutService.addBox(chartInstance, legend);
    };
    
    // Register the legend plugin
    Chart.plugins.register({
      beforeInit: (chartInstance) => {
        var legendOpts = chartInstance.options.legend;
    
        if (legendOpts) createNewLegendAndAttach(chartInstance, legendOpts);
      },
      beforeUpdate: (chartInstance) => {
        var legendOpts = chartInstance.options.legend;
    
        if (legendOpts) {
          legendOpts = Chart.helpers.configMerge(Chart.defaults.global.legend, legendOpts);
    
          if (chartInstance.newLegend) chartInstance.newLegend.options = legendOpts;
          else createNewLegendAndAttach(chartInstance, legendOpts);
        } 
        else {
          Chart.layoutService.removeBox(chartInstance, chartInstance.newLegend);
          delete chartInstance.newLegend;
        }
      },
      afterEvent: (chartInstance, e) => {
        var legend = chartInstance.newLegend;
        
        if (legend) legend.handleEvent(e);
      }
    });

    const options = {
      plugins: [
        pieceLabel
      ],
      pieceLabel: {
        render: ({ label, value }) => 
          `${value}% ${label}`,
        fontStyle: 'bold'
      },
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
      cutoutPercentage: this.calcCutOutSize(window.innerWidth)
    };
    
    const chart = new Chart(this.canvas, {
      type: 'pie',
      options,
      data: {
        labels,
        datasets: [{
          backgroundColor: ['rgb(53, 222, 113)', 'rgb(171, 102, 255)', 'rgb(70, 124, 255)', 'rgb(255, 206, 10)', 'rgb(255, 10, 214)'],
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
    } else if (screenX > 720) {
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
    else if (screenX > 800) return 24;
    else if (screenX > 768) return 26;
    else if (screenX > 720) return 28;
    else return 0;
  }

  calcBackgroundOffset = (screenX) => {
    if (screenX > 1080) return '49.9%';
    else if (screenX > 850) return '49.9%';
    else return '50.6%';
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
        
        <section>
          {stats.node
            ? Object.entries(stats).map( ([key, val]) => 
                <AppCounter key={key} type={key} apps={val} />
              )
            // loading spinners for stats
            : Object.keys(stats).map(stat => 
                <div key={stat} className={`app-counter ${stat}`}>
                  <GridLoader loading={!stats.node} color={'rgb(53, 222, 113)'} />
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
    node: PropTypes.number.isRequired,
    mongo: PropTypes.number.isRequired,
    express: PropTypes.number.isRequired,
    react: PropTypes.number.isRequired
  }).isRequired
};

export default PieChart;

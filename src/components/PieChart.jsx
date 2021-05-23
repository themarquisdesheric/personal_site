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

  render () {
    const { stats } = this.props;

    return (
      <div id="chart">
        <div className="logo-wrapper">
          <img src="/github-large.png" />
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

import React  from 'react';
import MUI    from 'material-ui';
import Chart  from 'react-chartjs';
import Mixin from './abstract-paper-mmixin';

const Paper     = MUI.Paper;
const LineChart = Chart.Line;

export default React.createClass({
    mixins : [Mixin],
    render() {
        const chartData    = this.chartData();
        const chartOptions = this.chartOptions();
        return (
          <Paper zDepth={1}
            innerClassName='chart-card' className={this.className()}
            onTouchTap={this.touch}>
            <LineChart data={chartData} options={chartOptions}/>
          </Paper>
        );
    },

    chartOptions() {
      return {
        bezierCurve: false
      }
    },

    chartData() {
        return {
            labels: [
                "January", "February", "March",
                "April", "May", "June", "July"
            ],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: this.rand(32, 100, 7)
            },{
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        };
    },

    rand(min, max, num) {
        const rtn = [];
        while (rtn.length < num) {
          rtn.push((Math.random() * (max - min)) + min);
        }
        return rtn;
    }
});

import React, { Component } from "react";
import Chart from "react-apexcharts";
import csvjson from "./csvjson.json";

const result = csvjson.map(data => {
  return {
    date: new Date(data.Date).getTime(),
    price: [
      data.Open.toFixed(5),
      data.High.toFixed(5),
      data.Low.toFixed(5),
      data.Close.toFixed(5)
    ]
  };
});

const data = result.map(element => ({
  x: new Date(element.date),
  y: element.price
}));

export default class CandleStickChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: "EUR/AUD",
          align: "left"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#00B746",
              downward: "#EF403C"
            },
            wick: {
              useFillColor: true
            },
            dataLabels: {
              position: "bottom"
            }
          }
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 2,
          position: "back",
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: undefined,
            opacity: 0.5
          },
          column: {
            colors: undefined,
            opacity: 0.5
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            autoSelected: "zoom"
          },
          height: 400
        }
      },

      series: [
        {
          data: data
        }
      ]
    };
  }

  render() {
    // console.log(result);
    // console.log(data);

    return (
      <div className="App">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height="600"
          width="150%"
        />
      </div>
    );
  }
}

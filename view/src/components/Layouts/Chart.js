import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { csv } from "d3";

export default function CandleStickChart() {
  const [options, setOptions] = useState({
    options: {
      title: {
        text: "EUR/USD",
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
            upward: "#3C90EB",
            downward: "#DF7D46"
          },
          wick: {
            useFillColor: false
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
      }
    }
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    csv("data.csv").then(data => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <Chart
        options={options}
        series={data}
        type="candlestick"
        height="600"
        width="150%"
        // plotOptions={this.state.plotOptions}
      />
    </div>
  );
}

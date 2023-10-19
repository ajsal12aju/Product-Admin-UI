import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function Performance() {
  const [chartData, setChartData] = useState({
    series: [{
      data: []
    }],
    options: {
      chart: {
        type: 'bar',
        height: 380
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          }
        },
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f'],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [],
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: 'Custom DataLabels',
          align: 'center',
          floating: true
        },
        subtitle: {
          text: 'Category Names as DataLabels inside bars',
          align: 'center'
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    }
  });

  useEffect(() => {
    
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => {
       
        const performanceData = data.dasbhoardPage.performance;

        
        setChartData({
          series: [{
            data: Object.values(performanceData)
          }],
          options: {
            xaxis: {
              categories: Object.keys(performanceData)
            }
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Performance</h2>
      <div style={{ width: "450px" }}>
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
      </div>
    </div>
  );
}

export default Performance;

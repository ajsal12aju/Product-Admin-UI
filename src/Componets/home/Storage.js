import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function Storage() {
  const [storage, setStorage] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => {
        const storageData = data.dasbhoardPage.storage;
        setStorage({
          series: [storageData.available, storageData.system, storageData.used],
          options: {
            ...storage.options,
            chart: {
              ...storage.options.chart,
              colors: ['#FF3367', '#3360FF', '#33FF45', '#FF3367', '#FFEC33'], 
            },
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    <h2>Performance</h2>
      <ReactApexChart options={storage.options} series={storage.series} type="pie" width={380} />
    </div>
  );
}

export default Storage;

import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

import Perfomance from "./Perfomence";
import Storage from './Storage';

function Home() {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'line',
        height: 350,
        
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => {
      
        const { featured, latest, months, popular } = data.dasbhoardPage.latestHits;
        setChartData({
          series: [
            {
              name: 'Featured',
              data: featured,
            },
            {
              name: 'Latest',
              data: latest,
            },
            {
              name: 'Popular',
              data: popular,
            },
          ],
          options: {
            chart: {
              type: 'line',
              height: 350,
              width: 300,
            },
            xaxis: {
              categories: months,
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
      <h2>Welcome Back</h2>
      <div style={{width:"500px", backgroundColor:"red"}}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
      </div>
       
      <div>
        <Perfomance/>
      </div>

      <div>
        <Storage/>
      </div>
    </div>
  );
}

export default Home;



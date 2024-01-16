import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./home.css"
import Perfomance from "./Perfomence";
import Storage from './Storage';
import Notification from './Notification';
import OrderList from './OrderList'

function Home() {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'line',
        height: 300,
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: 'white', 
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: 'white', 
          },
        },
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
              height: 300,
            },
            xaxis: {
              categories: months,
              labels: {
                style: {
                  colors: 'white',
                  fontSize: '13px',
                },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: 'white',
                  fontSize: '13px', 
                },
              },
            },
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='container' style={{marginTop:"50px"}}>
      
      <div className='row justify-content-center'>
     
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <div className='card-style'>
          <h2 style={{marginLeft:"20px"}} className='tm-block-title'>Updated Hits item</h2>
            <ReactApexChart
              className="chart-container"
              options={chartData.options}
              series={chartData.series}
              type="line"
              // height={350}
              // width={580}
            />
          </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-6'>
        <div className='card-style'>
        <h2 style={{marginLeft:"20px"}} className='tm-block-title'>Perfomance</h2>
          <Perfomance />
          </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-6'>
        <div className='card-style'>
        <h2 style={{marginLeft:"20px"}} className='tm-block-title'>Storage</h2>
          <Storage />
        </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center'>
  <div className='card-style'>

     <Notification/>
  </div>
</div>

<div className='col-12 d-flex justify-content-center'>
<div className='card-style1'>
<h2 style={{marginLeft:"20px"}} className='tm-block-title'>Orderd  List</h2> 
 <OrderList/>

</div>
</div>
  
      </div>
    </div>
  );
}

export default Home;

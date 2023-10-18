import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from 'react-chartjs-2';

const Home = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      console.log(chartRef.current.chartInstance);
    }
  }, []);

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['yellow', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      Welcome Back
      <canvas ref={chartRef} />
    </div>
  );
};

export default Home;

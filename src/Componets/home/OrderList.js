import React, { useEffect, useState } from 'react';
import './home.css'

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => setData(data?.dasbhoardPage?.orders))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(data, "data")

  return (
    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
    <table className='table1'>
      <thead  className='table-head'>
        <tr>
          <th style={{padding:"20px"}}>ORDER NO</th>
          <th>STATUS</th>
          <th>OPERATORS</th>
          <th>LOCATION</th>
          <th>DISTANCE</th>
          <th>START DATE</th>
          <th>EST DELIVERY DUE</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((order) => (
            <tr style={{ fontSize:"14px", fontWeight:"bold"}} key={order.orderNo}>
              <td style={{padding:"20px", fontSize:"14px", fontWeight:"bold"}}>{order.orderNo}</td>
              <td>{order.status}</td>
              <td>{order.operators}</td>
              <td>{order.location}</td>
              <td>{order.distance}</td>
              <td>{order.startDate}</td>
              <td>{order.deliveryDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
}

export default YourComponent;

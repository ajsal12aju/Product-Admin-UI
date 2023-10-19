import React, { useEffect, useState } from 'react';

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => setData(data.orders))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ORDER NO</th>
          <th>STATUS</th>
          <th>OPERATORS</th>
          <th>LOCATION</th>
          <th>DISTANCE</th>
          <th>START DATE</th>
          <th>EST DELIVERY DUE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <tr key={order.orderNo}>
            <td>{order.orderNo}</td>
            <td>{order.status}</td>
            <td>{order.operators}</td>
            <td>{order.location}</td>
            <td>{order.distance}</td>
            <td>{order.startDate}</td>
            <td>{order.deliveryDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default YourComponent;

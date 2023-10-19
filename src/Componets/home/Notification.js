import React from 'react'
import { useState , useEffect } from 'react';
import './home.css'

function Notification() {
    const [data, setData] = useState(null);

  useEffect(() => {
    
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => {
        
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data?.dasbhoardPage?.notifications, "datass")
  return (
    <div>
      <div className='tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow'>
        <h2 className='tm-block-title'>Notification List</h2>
        <div className='tm-notification-items'>
        {data?.dasbhoardPage?.notifications.map((notification) => (
            <div className='media tm-notification-item'>
              <div className='tm-gray-circle'>
                <img className='rounded-circle' src={notification?.pic} alt="" />
              </div>
              <div className='media-body'>
                <p className='mb-2'> &nbsp; &nbsp; &nbsp; <b>Shopie</b> and <b>Sent you</b> 
                 <a style={{textDecoration:"none"}} href="" className='tm-notification-link'>  Products updates</a>.
                </p>
                <span className='tm-small tm-text-color-secondary'> &nbsp; &nbsp; &nbsp; 6h ago</span>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Notification

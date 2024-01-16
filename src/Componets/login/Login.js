import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('details', JSON.stringify(data));
        setData(data);
        // localStorage.setItem('user_email', JSON.stringify(data?.accountsPage?.Admin?.email));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

console.log(localStorage.getItem('user_email'), "email cameee")

  const handleLogin = () => {
    if (
      username === data?.accountsPage?.Admin?.email &&
      password === data?.accountsPage?.Admin?.password
    ) {
      localStorage.setItem('user_email', JSON.stringify(data?.accountsPage?.Admin?.email));
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };
 

  return (
    <div>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-12 mx-auto tm-login-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 mx-auto">
                  <h2 className="tm-block-title mb-4 pt-4">Welcome to Login</h2>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control validate"
                      id="username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control validate"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}
                  <div className="form-group mt-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-block text-uppercase"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div className="form-group mt-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Forgot Your Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


///socket.js

let io;
module.exports = {
  init: (server) => {
    io = require("socket.io")(server, {
      cors: {
        origin: "*",
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized");
    }
    return io;
  },
};


//index.js

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// const feedRoutes = require("./routes/feed.routes");
// const socket = require("./socket");

// app.use(express.json());
// app.use("/feed", feedRoutes);
// app.use(express.urlencoded({ extended: true }));

// mongoose
//   .connect("mongodb://localhost:27017/dec_batch")
//   .then(() => {
//     const server = app.listen(5002);

//     const io = socket.init(server);

//     io.on("connection", (socket) => {
//       console.log("client connected");

//       socket.emit('reply', {message: 'hello from server'})

//       socket.on("disconnect", () => {
//         console.log("client disconnected");
//       });

//       socket.on("talking", (data) => {
//         console.log(data);
//       });


//     });

//     app.listen(5001, () => {
//       console.log("server is running on port 5001");
//     });
//   })
//   .catch((err) => console.log(err));

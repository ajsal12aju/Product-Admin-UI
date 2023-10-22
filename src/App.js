import { Link } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from 'react'
// import Home from './Componets/home/Home';
// import Login from './Componets/login/Login';
import AppRouter from "./AppRouter";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => setData(data?.dasbhoardPage?.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const role =  localStorage.getItem('user_email')
  console.log(role, "role isssssssssss");
  const cleara = ()=>{
    localStorage.clear('user_email')
  }

  return (
    <div className="App">
      {/* header */}
      <header>
        <div style={{backgroundColor:"#567086"}} >
      <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Product Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={role ?"d-none":"me-auto nav-contentes"}  >
          <Link to="/home" className="nav-link1">
              <Nav.Link href="#home">
                <i className="fa fa-tachometer nav-icons" aria-hidden="true"></i><br/>
                Dashboard
              </Nav.Link>
            </Link>
            <Link to="/reports" className="nav-link1">
              <Nav.Link href="#link">
                <i className="fa-solid fa-file-lines nav-icons"></i><br/>
                Reports
              </Nav.Link>
            </Link>
            <Link to="/products" className="nav-link1">
              <Nav.Link href="#link">
              <i class="fa-solid fa-cart-shopping nav-icons"></i><br/>
                Products
              </Nav.Link>
            </Link>
           
      
          
            <Link to="/accounts" className="nav-link1">
              <Nav.Link href="#home">
                <i className="fa-solid fa-user nav-icons"></i><br/>
                Accounts
              </Nav.Link>
            </Link>
            <Link to="/settings" className="nav-link1">
              <Nav.Link href="#home">
                <i className="fa-solid fa-gear nav-icons"></i><br/>
                Settings
              </Nav.Link>
            </Link>
          </Nav>
          <Link to='/'>
          <p onClick={cleara()} className="logout">Logout</p>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
       
      </header>
      {/* the main sections */}

      <AppRouter />

      {/* footer */}
      <div style={{ marginTop: "150px" }}>
        <footer className="tm-footer row tm-mt-small">
          <div className="col-12 font-weight-light">
            <p className="text-center text-white mb-0 px-4 small">
              Copyright ©<b>2023</b> All rights reserved. Design!
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

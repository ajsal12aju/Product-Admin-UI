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
          <Nav className="me-auto nav-contentes" >
          <Link to="/home" className="nav-link1">
              <Nav.Link href="#home">
                <i className="fa fa-tachometer" aria-hidden="true"></i><br/>
                Dashboard
              </Nav.Link>
            </Link>
            <Link to="/reports" className="nav-link1">
              <Nav.Link href="#link">
                <i className="fa-solid fa-file-lines"></i><br/>
                Reports
              </Nav.Link>
            </Link>
            <Link to="/products" className="nav-link1">
              <Nav.Link href="#link">
              <i class="fa-solid fa-cart-shopping"></i><br/>
                Products
              </Nav.Link>
            </Link>
           
      
          
            <Link to="/accounts" className="nav-link1">
              <Nav.Link href="#home">
                <i className="fa-solid fa-user"></i><br/>
                Accounts
              </Nav.Link>
            </Link>
            <Link to="/settings" className="nav-link1">
              <Nav.Link href="#home">
                <i className="fa-solid fa-gear"></i><br/>
                Setting
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        {/* <nav className="navbar navbar-expand-xl">
          <div className="container h-100">
            <a href="navbar-brand">
              <h1 className="tm-site-title mb-0">Product Admin</h1>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto h-100">
              <Link style={{textDecoration:"none"}} to="/home">
                <li className="nav-item">
                  <a href="" className="nav-link1">
                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                    Dashboard
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                </Link>
                <li className="nav-item">
                  <a href="" className="nav-link1">
                    <i class="fa-solid fa-file-lines"></i>
                    Reports
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <Link style={{textDecoration:"none"}} to="/products">
                  <li className="nav-item">
                    <a href="" className="nav-link1">
                      <i class="fa-solid fa-cart-shopping"></i>
                      Products
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </Link>
                <Link style={{textDecoration:"none"}} to="/accounts">
                <li className="nav-item">
                  <a href="" className="nav-link1">
                    <i className="fa-solid fa-user"></i>
                    Accounts
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                </Link>
               
                <li className="nav-item">
                  <a href="" className="nav-link1">
                    <i class="fa-solid fa-gear"></i>
                    Setting
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
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

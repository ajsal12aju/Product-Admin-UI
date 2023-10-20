
import { Link } from 'react-router-dom';
import './App.css';
// import Home from './Componets/home/Home';
// import Login from './Componets/login/Login';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header>
        <nav className='navbar navbar-expand-xl'>
          <div className="container h-100">
            <a href="navbar-brand">
              <h1 className='tm-site-title mb-0'>Product Admin</h1>
            </a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mx-auto h-100'>
                <li className='nav-item'>
                  <a href="" className='nav-link1'>
                  <i class="fa fa-tachometer" aria-hidden="true"></i>   
                    Dashboard
                  <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="" className='nav-link1'>
                  <i class="fa-solid fa-file-lines"></i>
                  Reports
                  <span className="sr-only">(current)</span>
                  </a>
                </li>
                <Link  to="/products">
                <li className='nav-item'>
                  <a href="" className='nav-link1'>
                  <i class="fa-solid fa-cart-shopping"></i>
                  Products
                  <span className="sr-only">(current)</span>
                  </a>
                </li>

                </Link>
                <li className='nav-item'>
                  <a href="" className='nav-link1'>
                  <i className="fa-solid fa-user"></i>
    Accounts
    <span className="sr-only">(current)</span>
                  </a>
                </li>
              
              
                  
                {/* <Link className='nav-link1'> */}
   
  {/* </Link> */}
               
                <li className='nav-item'>
                  <a href="" className='nav-link1'>
                  <i class="fa-solid fa-gear"></i>
                  Setting
                  <span className="sr-only">(current)</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
     {/* the main sections */}
  
        <AppRouter />
     

      {/* footer */}
<div style={{marginTop:"150px"}}>
      <footer  className="tm-footer row tm-mt-small">
          <div className='col-12 font-weight-light'>
            <p className="text-center text-white mb-0 px-4 small">
          Copyright © 
          <b>2023</b> All rights reserved. Design!
</p>
          </div>
      </footer>
      </div>
    </div>
  );
}

export default App;

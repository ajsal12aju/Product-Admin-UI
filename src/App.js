
import './App.css';
import Login from './Componets/login/Login';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='navbar navbar-expand-xl'>
          <div className="container h-100">
            <a href="navbar-brand">
              <h1 className='tm-site-title mb-0'>Product Admin</h1>
            </a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mx-auto h-100'>
                <li className='nav-item'>
                  <a href="" className='nav-link'>
                  <i class="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard
                  <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="" className='nav-link'>
                  <i class="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard
                  <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="" className='nav-link'>
                  <i class="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard
                  <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="" className='nav-link'>
                  <i class="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard
                  <span className="sr-only">(current)</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Login/>
    </div>
  );
}

export default App;

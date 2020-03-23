import React from 'react';
import './App.css';
import ReturnedData from './ReturnedData';
import $ from 'jquery';

class App extends React.Component {



  toggleSideBar() {
    console.log('activated');
    $('.sidebar').toggleClass('active');
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>Social Media Sentiment Analysis App</p>
          
      //   </header>
      //   <ReturnedData />
      // </div>
  
      <div className="wrapper">
          {/* <!-- Sidebar  --> */}
          <nav className="sidebar" id='sidebar'>
              <div className="sidebar-header">
                  <h3>Main Menu</h3>
              </div>
      
              <ul className="list-unstyled components">
      
                  <li>
                      <a href="#">All Tweets</a>
                  </li>
                  <li>
                      <a href="#">Positive Sentiment</a>
                  </li>
                  <li>
                      <a href="#">Negative Sentiment</a>
                  </li>
                  <li>
                      <a href="#">Neutral Sentiment</a>
                  </li>
              </ul>
      
          </nav>
      
          {/* <!-- Top Navbar  --> */}
          <div id="content">
      
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
      
                      <button type="button" id="sidebarCollapse" className="btn btn-info toggle-button" onClick={e => this.toggleSideBar()}>
                          <i className="fas fa-align-left"></i>
                          <span>Toggle Menu</span>
                      </button>
                      <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation">
                          <i className="fas fa-align-justify"></i>
                      </button>
      
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="nav navbar-nav ml-auto">
      
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Home</a>
                              </li>
                              {/* <!--<li className="nav-item">
                                  <a className="nav-link" href="#" >Login</a>
                              </li>--> */}
                              <li className="nav-item">
                                  <a className="nav-link" >Logout</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
      
              {/* <!-- Page content --> */}
      
              <div id="center-content">
                  <div className="container">
                      <h2>Tweets</h2>
                      <table className="table table-striped">
                        <thead>
                        <tr>
                          <th>Username</th>
                          <th>Tweet</th>
                        </tr>
                        </thead>
                        
                          <ReturnedData />
                        
                      </table>
                    </div>
              </div>
      
          </div>
          <footer className="footer">
              <div className="container">
                  <i className="fab fa-hooli fa-3x"></i>
              </div>
          </footer>
      </div>
    );
  }
}



export default App;

import React from 'react';
import './App.css';
import ReturnedData from './ReturnedData';
import $ from 'jquery';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sentimentValue: 'all'
        }

        this.setSentimentValue = this.setSentimentValue.bind(this);
    }


  toggleSideBar() {
    $('.sidebar').toggleClass('active');
  }

  setSentimentValue(value) {
        this.setState({sentimentValue: value});
        console.log('setSentimentvalue = ' + value);
  }


  render() {
    return (

      <div className="wrapper">
          {/* <!-- Sidebar  --> */}
          <nav className="sidebar" id='sidebar'>
              <div className="sidebar-header">
                  <h3>Main Menu</h3>
              </div>
      
              <ul className="list-unstyled components">
      
                  <li>
                      <button onClick={() => this.setSentimentValue('all')}>All Tweets</button>
                  </li>
                  <li>
                      <button onClick={() => this.setSentimentValue('positive')}>Positive Sentiment</button>
                  </li>
                  <li>
                      <button onClick={() => this.setSentimentValue('negative')}>Negative Sentiment</button>
                  </li>
                  <li>
                      <button onClick={() => this.setSentimentValue('neutral')}>Neutral Sentiment</button>
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
                        
                          <ReturnedData sentimentValue={this.state.sentimentValue} />
                        
                      </table>
                    </div>
              </div>
      
          </div>
          <footer className="footer">
              <div className="container">
                  <i className="fab fa-hooli fa-3x" />
              </div>
          </footer>
      </div>
    );
  }
}



export default App;

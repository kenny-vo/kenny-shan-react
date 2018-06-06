import React, { Component } from 'react';
// import NavbarHeader from './components/Navbar';
import Countdown from './components/Countdown';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <NavbarHeader /> */}
        <section className="hero">
          <div className="container">
            <div className="header-text-box col-xs-12 col-md-4">
              <h1 className="header-title">
                shan &amp; kenny
              </h1>
              <h3 className="save-date-text">
                save <span className="the-text">the  </span>date |
                <span className="date-text"> 10. 18. 19</span>
              </h3>

              <h2 className="location-text">
                AUSTIN, TX
              </h2>
              <h3 className="details-text">
                DETAILS TO FOLLOW
                {/* <span className="countdown">
                <Countdown date={`2019-10-18T00:00:00`} />
                </span> */}
              </h3>
              <br/>
            </div>
          </div>
        </section>
        {/* <section className="about-us">
          <div className="container about-text-box">
            <h1 className="about-title">
              About us
            </h1>
          </div>
        </section>
        <section className="wedding-details">
          <div className="container about-text-box">
            <h1 className="about-title">
              Wedding Detauls
            </h1>
          </div>
        </section> */}


      </div>
    );
  }
}

export default App;

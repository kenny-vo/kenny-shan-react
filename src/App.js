import React, { Component } from 'react';
import NavbarHeader from './components/Navbar';
import Countdown from './components/Countdown';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="wrapper">
        {/* <NavbarHeader /> */}
        <section className="hero">
          <div className="container">
            <div className="header-text-box col-xs-12 col-md-4">
              <h1 className="header-title">
                SHAN &amp; KENNY
                <Countdown date={`2019-10-18T00:00:00`} />
              </h1>
              <br/>
            <h1 className="header-text">
                SAVE THE DATE
              </h1>

              {/* <Countdown date={`2019-12-24T00:00:00`} /> */}

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

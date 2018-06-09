import React, {Component} from 'react';
// import NavbarHeader from './components/Navbar';
import Countdown from './components/Countdown';
import AddToCalendar from 'react-add-to-calendar';
import './App.css';
import './App.scss';

class App extends Component {

  static displayName = 'Wedding ';
  state = {
    event: {
      title: 'Shan & Kennys Wedding',
      description: 'Shan and Kenny Wedding in ATX',
      location: 'Austin, TX',
      startTime: '2019-10-18T20:15:00-04:00',
      endTime: '2019-10-19T21:45:00-04:00'
    }
  };
  render() {
    let icon = { 'fa fa-calendar': 'right' };
    let items = [
       { google: 'Google' },
       { apple: 'Apple Calendar' },
       { yahoo: 'Yahoo' },
       { outlook: 'Outlook' },
       { outlookcom: 'Outlook.com' },
    ];

    return (
      <div className="wrapper">
        {/* <NavbarHeader /> */}
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="header-text-box col-xs-12">
                <h1 className="header-title">
                  shan
                </h1>
                <h1 className="amp-title">
                  &amp; kenny
                </h1>
                <h1 className="header-title-responsive">
                  shan &amp; kenny
                </h1>
                <h3 className="save-date-text">
                  save
                  <span className="the-text">
                    {" "}<i>the</i>
                  </span>
                  {" "}date |
                  <span className="date-text">
                    {" "}
                    10. 18. 19</span>
                </h3>
              </div>
              {/* <div className="countdown-row container">
                  <Countdown date={`2019-10-18T00:00:00`} />
              </div> */}
              <div className="details-row">
                <div className="details-div">

                  <h2 className="location-text">
                    AUSTIN, TX
                  </h2>
                  <h3 className="details-text">
                    DETAILS TO FOLLOW
                    {/* <AddToCalendar event={this.state.event}
                      buttonLabel=""
                      buttonTemplate={icon}
                      listItems={items} /> */}

                  </h3>
                </div>
              </div>
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

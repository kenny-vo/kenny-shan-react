import React, { Component } from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = { year: new Date().getFullYear() };

  }
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <li>
            &copy; {this.state.year} Kenny and Shan
          </li>        </div>
      </footer>
    )
  }
}

export default Footer;

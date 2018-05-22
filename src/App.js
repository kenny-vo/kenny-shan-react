import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
      <h1>Shan and Kenny site</h1>
        <Footer />
      </div>
    );
  }
}

export default App;

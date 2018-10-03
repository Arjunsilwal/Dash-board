import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Services from './Services';
import Sectionabout from './Sectionabout';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <body id="page-top">
          <Nav />
          <Header />
          <Sectionabout />
          <Services />
          <Contact />
       </body>
      </div>
    );
  }
}

export default App;

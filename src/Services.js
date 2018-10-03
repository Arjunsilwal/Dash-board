import React, { Component } from 'react';
import Nav from './Nav';

class Services extends Component {
  render(){
    return(
      <div>
        <Nav />
        <section id="services" class="bg-light">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2>Services Nepal offer to you</h2>
                <p class="lead">Here are some services Nepal offer to you:</p>
                <li>Number of five star hotels and three star hotels</li>
                <li>Affordable food</li>
                <li>Experience tourist guide</li>
                <li>Rafting, Bugee, Praglyding and different kinds of thrilling experience</li>
                <li>Travel National park on the Elepahant</li>
                <li>Treaking</li>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;

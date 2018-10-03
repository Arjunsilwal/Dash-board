import React, { Component } from 'react';
import Nav from './Nav';


class Sectionabout extends Component {
  render(){
    return(
      <div>
        <Nav />
        <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2>About the Nepal</h2>
                <p class="lead">This is a great place to spend your leisure time.
                  You can find lots of temples representing different kinds of religion. Here is a lot of temple(Gumba) of Gautam Budda since Gautam Budda was born in Nepal.
                   some feature of Nepal you can enjoy are:</p>
                <ul>
                  <li>Large green forest with myriad of wildlife.</li>
                  <li>More than five mountains of 8000m and all are covered with snow.</li>
                  <li>World highest Mountain(mount Everest) and world Lowest ground with in one country. </li>
                  <li>Can view all different type of climate with in same country with visiting different parts.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Sectionabout;

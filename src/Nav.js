import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div class="container">
            <div class="navbar-brand js-scroll-trigger">
              <Link to={"/home"}>Nepal Home</Link>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
               data-target="#navbarResponsive"
               aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item nav-link js-scroll-trigger">

                    <Link to={"/about"}>About</Link>

                </li>
                <li class="nav-item nav-link js-scroll-trigger">

                  <Link to={"/service"}>Services</Link>

                </li>
                <li class="nav-item nav-link js-scroll-trigger">

                  <Link to={"/contact"} >Contact</Link>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

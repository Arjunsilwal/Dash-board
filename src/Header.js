import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <header class="bg-primary text-white">
          <div class="container text-center">
            <h1>Welcome to the Nepal</h1>
            <p class="lead">This is the place rich in natural resources.</p>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;

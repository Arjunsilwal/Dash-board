import React, { Component } from 'react';
import Nav from './Nav';


class Contact extends Component {
  render(){
    return(
      <div>
        <Nav/>
        <section id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p class="lead">Arjun Silwal,
                  I am not tourist guide, so don't get confuse.
                    But I can manage all the visiting process for you with taking some percentage.</p>
              </div>
            </div>
          </div>
          <h2 id="text1">Leave a message here</h2>
          <textarea placeholder="Leave a message here" />
            <div id="text2" >
              <input class="submit" type="submit" />
           </div>
        </section>
      </div>
    );
  }
}

export default Contact;

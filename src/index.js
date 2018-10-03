import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Services from './Services';
import Contact from './Contact';
import Sectionabout from './Sectionabout';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from 'react-router-dom';




ReactDOM.render(
<BrowserRouter>
  <div>
    <Route path="/home" component={App} />
    <Route path="/about"  component={Sectionabout} />
    <Route path="/service" component={Services} />
    <Route path="/contact" component={Contact} />
  </div>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

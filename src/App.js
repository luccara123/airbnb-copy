import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './utility/NavBar/NavBar'
import Home from './pages/Home/Home'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Modal from './utility/Modal/Modal';
import cityVenues from './pages/CityVenus/CityVenues'
import PaymentSuccess from './pages/PaymentSuccess.js/PaymentSuccess';
import Account from './pages/Account/Account'

class App extends Component{

  render(){
    return(
      <Router>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home}  />
          <Route exact path="/venue/:vid" component={SingleFullVenue} />
          <Route exact path="/venue/:cityName" component={cityVenues} />
          <Route path="/" component={Modal} />
          <Route exact path="/payment-success/:stripeToken" component={PaymentSuccess} />
          <Route path="/account" component={ Account } />
      </Router>
    )
  }
}

export default App;

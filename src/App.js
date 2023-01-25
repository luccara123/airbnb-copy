import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './utility/NavBar/NavBar'
import Home from './pages/Home/Home'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Modal from './utility/Modal/Modal';
import cityVenues from './pages/CityVenus/CityVenues'

class App extends Component{

  render(){
    return(
      <Router>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home}  />
          <Route exact path="/venue/:vid" component={SingleFullVenue} />
          <Route exact path="/venue/:cityName" component={cityVenues} />
          <Route path="/" component={Modal} />
      </Router>
    )
  }
}

export default App;

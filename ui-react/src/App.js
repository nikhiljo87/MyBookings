import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingList from './BookingList/BookingList';
class App extends Component {
  render() {
    return (
      <Router>
       <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/bookinglist" className="navbar-brand">
              Booking List
            </a>            
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={BookingList} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

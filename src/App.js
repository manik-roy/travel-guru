import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Booking from './components/booking/Booking';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="home">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/booking/:id" component={Booking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

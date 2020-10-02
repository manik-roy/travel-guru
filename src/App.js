import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Login from './components/auth/Login';
import Booking from './components/booking/Booking';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Search from './components/search/Search';

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (

    <div className={`${location.pathname === '/' || location.pathname.includes('booking') ? "home" : ""}`}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/booking/:id" component={Booking} />
        <Route path="/search/:id" component={Search} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>

  );
}

export default App;

import React, { createContext, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Login from './components/auth/Login';
import Booking from './components/booking/Booking';
import Header from './components/header/Header';
import Home from './components/home/Home';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Search from './components/search/Search';

export const UserContext = createContext();
function App() {
  const location = useLocation();
const [user, setUser] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser, bookingInfo, setBookingInfo }}>
      <div className={`${location.pathname === '/' || location.pathname.includes('booking') ? "home" : ""}`}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/booking/:id" component={Booking} />
          <PrivateRoute path="/search/:id">
            <Search />
          </PrivateRoute>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;

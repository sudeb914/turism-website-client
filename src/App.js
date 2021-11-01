import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './pages/Header/Menu/Menu';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Bookings/Booking/Booking';
import AddNewService from './pages/AddNewService/AddNewService';
import NotFound from './pages/NotFound/NotFound';
import MyBookings from './pages/Bookings/MyBookings/MyBookings';
import ManageAllBookings from './pages/Bookings/ManageAllBookings/ManageAllBookings';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/my-bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-bookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/add-new-service">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;

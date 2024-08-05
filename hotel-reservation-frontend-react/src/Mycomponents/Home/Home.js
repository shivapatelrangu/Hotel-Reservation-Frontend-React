import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '/Users/2262923/HotelManagementFrontEnd/src/Mycomponents/hotel_logo.jpg';
import picture1 from '../../MyPictures/6.jpg'
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={picture1} className="home-logo" alt="Hotel Logo" />
      <div className="home-links">
        <Link className="home-link" to="/roomSearchController">Search Rooms</Link>
        <Link className="home-link" to="/reserveRoomController">Reserve Rooms</Link>
        <Link className="home-link" to="/viewController">View Reservation</Link>
        <Link className="home-link" to="/cancelController">Cancel Reservation</Link>
      </div>
    </div>
  );
};

export default Home;
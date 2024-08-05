import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'


import ReserveRoomController from './Mycomponents/Reservation/ReserveRoomController'
import ReserveRoomService from './Mycomponents/Reservation/ReserveRoomService'
import ViewService from './Mycomponents/ViewReservation/ViewService'
import ViewController from './Mycomponents/ViewReservation/ViewController'
import RoomSearchService from './Mycomponents/SearchRooms/RoomSearchService'
import RoomSearchController from './Mycomponents/SearchRooms/RoomSearchController'
import CancelController from './Mycomponents/CancelReservation/CancelController'
import CancelService from './Mycomponents/CancelReservation/CancelService'
import Navbar from './Navbar/Navbar'
import About from './Navbar/About'
import Footer from './Navbar/Footer/Footer'
import Home from './Mycomponents/Home/Home'


const App = () => {
  return (
    <div>
      

      <BrowserRouter>
        <Navbar/ >
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/roomSearchController' element={<RoomSearchController/>}/>
          <Route path="/roomSearchService" element={<RoomSearchService/>}/>
          <Route path="/reserveRoomController" element={<ReserveRoomController/>}/>
          <Route path="/reserveRoomService" element={<ReserveRoomService/>}/>
          <Route path="/viewController" element={<ViewController/>}/>
          <Route path="/viewService" element={<ViewService/>}/>
          <Route path="/cancelController" element={<CancelController/>}/>
          <Route path="cancelService" element={<CancelService/>}/>
          <Route path="/about" element={<About/>}/>
        
       </Routes>
       <Footer/>
      </BrowserRouter>\
      
    </div>
  )
}

export default App

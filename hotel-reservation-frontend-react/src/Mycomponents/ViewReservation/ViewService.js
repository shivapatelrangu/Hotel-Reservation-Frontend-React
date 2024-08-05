import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const ViewService = () => {
  const location = useLocation();
  const { bookingId } = location.state || {};
  const REST_URL = 'http://localhost:3301/view-api/view-reservation';
  // const REST_URL = 'http://localhost:8281/view-api/view-reservation';
  const [rooms, setRooms] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!bookingId) {
      setErrorMessage('Booking ID is missing..');
      return;
    }

    axios.get(REST_URL, {
      params: { bookingId },
      headers: {
        custId: 1,
        staffId: 1,
      },
    })
      .then(response => {
        setRooms(response.data);
        console.log(response.data);
        setErrorMessage(''); 
      })
      .catch(error => {
        console.error('Error:', error);

        if (error.response) {
          const errorMsg = error.response.data.message || 'An error occurred on the server.';
          setErrorMessage(errorMsg);
        } else if (error.request) {
          setErrorMessage('No response from server');
        } else {
          setErrorMessage('An error occurred: ' + error.message);
        }
      });
  }, [bookingId]); 


  return (
    <div className='container'>
      {errorMessage ? (
         <div style={{marginTop:'80px'}}>
              <Alert variant='warning' className='text-center' >
                   {errorMessage}
            </Alert>
     </div>
      ) : (
        <>
          <h1>Reservation Details</h1>
          <table className="table table-striped table-hover">
            <tbody>
              <tr>
                <th>Check-In Date</th>
                <td>{rooms.checkInDate}</td>
              </tr>
              <tr>
                <th>Check-Out Date</th>
                <td>{rooms.checkOutDate}</td>
              </tr>
              <tr>
                <th>No. of Rooms</th>
                <td>{rooms.noOfRooms}</td>
              </tr>
              <tr>
                <th>AC Rooms</th>
                <td>{rooms.acRooms}</td>
              </tr>
              <tr>
                <th>Non-AC Rooms</th>
                <td>{rooms.nonAcRooms}</td>
              </tr>
              <tr>
                <th>Deluxe Rooms</th>
                <td>{rooms.deluxRooms}</td>
              </tr>
              <tr>
                <th>Price Paid</th>
                <td>{rooms.pricePaid}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ViewService;

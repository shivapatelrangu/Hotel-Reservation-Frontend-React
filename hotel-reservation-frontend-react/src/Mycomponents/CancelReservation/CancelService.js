import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link ,useLocation} from 'react-router-dom';
import { Alert, Button, ButtonGroup } from 'react-bootstrap';

const CancelService = () => {
    const location = useLocation();
    const { bookingId,acRooms,nonAcRooms,deluxRooms } = location.state || {};

    const REST_URL = 'http://localhost:3301/api/cancel-reservation/cancel-rooms';
    // const REST_URL = 'http://localhost:8281/api/cancel-reservation/cancel-rooms';

   const[rooms,setRooms]=useState([])
   const [errorMessage, setErrorMessage] = useState('');

   useEffect (()=>{
    const cancelRoom = async () => {
        await axios.put(REST_URL,
         {
            bookingId:bookingId,
            acRooms:acRooms,
            nonAcRooms:nonAcRooms,
            deluxRooms:deluxRooms
        },{
        headers :{
            custId:1,
            staffId:1
        }
    }).then((response) =>{
        setRooms(response.data);
        setErrorMessage(''); 
    }).catch(error=>{
      if (error.response) {
        setErrorMessage(error.response.data.message);  
      }
    })}
    cancelRoom();
   },[])

   return (
    <div className='container'>
        {errorMessage ? (
            <div style={{marginTop:'130px'}}>
            <Alert variant='warning' className='text-center' >
               {errorMessage}
             </Alert>
            </div>
            
        ) : (
            <div style={{marginTop:'130px'}}>
                    <Alert variant='success' className='text-center' >
                    <p>{rooms.message}</p> 
                </Alert>
                </div>
        )}
    </div>
)
}

export default CancelService

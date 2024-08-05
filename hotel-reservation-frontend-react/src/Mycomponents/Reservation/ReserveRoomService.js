import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

const ReserveRoomService = () => {
    const location = useLocation();
    const { checkInDate, checkOutDate, noOfAcRooms, noOfNonAcRooms, noOfDeluxRooms } = location.state || {};
    const REST_URL = 'http://localhost:3301/reservations/api/reserve-rooms';
    // const REST_URL = 'http://localhost:8281/reservations/api/reserve-rooms';
    const effectRan = useRef(false);

    const [rooms, setRooms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        console.log("effect ran");
        if (effectRan.current === true) {
            const reserveRoom = async () => {
                await axios.post(REST_URL,
                    {
                        checkInDate: checkInDate,
                        checkOutDate: checkOutDate,
                        noOfAcRooms: noOfAcRooms,
                        noOfNonAcRooms: noOfNonAcRooms,
                        noOfDeluxRooms: noOfDeluxRooms
                    }, {
                    headers: {
                        custId: 1,
                        staffId: 1
                    }
                }).then((response) => {
                    setRooms(response.data);
                    setErrorMessage('');
            
                }).catch(error => {
                    if (error.response) {
                        setErrorMessage(error.response.data.message);
                        console.log(error.response.data)
        
                    }
                })
            }
            reserveRoom();
        }
        return () => {
            console.log("unmount");
            effectRan.current = true
        }

    }, [checkInDate, checkOutDate, noOfAcRooms, noOfNonAcRooms, noOfDeluxRooms])

    return (
        <Container className='mt-5'>
            {errorMessage ? (
                <div style={{marginTop:'80px'}}>
                <Alert variant='warning' className='text-center'>
                    {errorMessage}
    
                </Alert>
                </div>
            ) : (
                
                <div className='mt-5' style={{marginTop:'80px'}}>
                    <Alert variant='success' className='text-center'>
                    <Row className='justify-content-center'>
                        <Col md={8} className='text-center'>
                            <p >{rooms.message}</p>  
                        </Col>
                    </Row>
                    </Alert>
                </div>
               
            )}
        </Container>
    )
}

export default ReserveRoomService;
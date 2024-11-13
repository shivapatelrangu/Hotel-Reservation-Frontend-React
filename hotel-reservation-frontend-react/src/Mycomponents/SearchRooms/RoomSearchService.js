import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useLocation } from 'react-router-dom';
import {  Alert, Container, Row, Col, Table } from 'react-bootstrap';

const RoomSearchService = () => {
    const location = useLocation();
    const { fromDate, toDate } = location.state || {};

    // const REST_URL = 'http://localhost:3302/api/search-rooms/available';
     const REST_URL = 'http://localhost:8281/api/search-rooms/available';
    const [rooms, setRooms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(REST_URL, {
            params: {
                fromDate: fromDate,
                toDate: toDate
            },
            headers: {
                custId: 1,
                staffId: 1
            }
        }).then((response) => {
            if (Array.isArray(response.data)) {
                setRooms(response.data);
                setErrorMessage('');
            } else {
                setRooms([]);
                setErrorMessage(response.data.message);
                console.error('Unexpected response format:', response.data);
            }
        }).catch(error => {
            if (error.response) {
                setErrorMessage(error.response.data.message);
                console.error(error.response.data);
            } else {
                setErrorMessage('Network error');
                console.error('Network error:', error);
            }
        });
    }, [fromDate, toDate]);

    return (
        <Container className='mt-5'>
            {errorMessage ? (
                <div style={{marginTop:'80px'}}>
                    <Alert variant='warning' className='text-center' >
                    {errorMessage}
                   
                </Alert>
                </div>
            ) : (
                <Container className='mt-5'>
                    <Row className='justify-content-center'>
                        <Col md={10}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Room Type</th>
                                        <th>Price</th>
                                        <th>Available Rooms</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((room) => (
                                        <tr key={room.roomType}>
                                            <td>{room.roomType}</td>
                                            <td>{room.price}</td>
                                            <td>{room.totalAvailableRooms}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            )}
        </Container>
    );
};

export default RoomSearchService;
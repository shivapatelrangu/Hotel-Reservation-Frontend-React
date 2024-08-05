import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationValidation from '../../Validations/ReservationValidation';

const ReserveRoomController = () => {
    const [data, setData] = useState({
        checkInDate: '',
        checkOutDate: '',
        noOfAcRooms: '',
        noOfNonAcRooms: '',
        noOfDeluxRooms: ''
    });

    const { checkInDate, checkOutDate, noOfAcRooms, noOfNonAcRooms, noOfDeluxRooms } = data;
    const navigate = useNavigate();

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = ReservationValidation(data);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            handleGetDetails();
        }
    };

    const handleGetDetails = () => {
        navigate('/reserveRoomService', { state: { checkInDate, checkOutDate, noOfAcRooms, noOfNonAcRooms, noOfDeluxRooms } });
    };

    return (
        <div className="container" style={{ width: "400px" }}>
            <center>
                <h2>Reservation</h2>
            </center>
            <form onSubmit={handleSubmit} className='form-control'>
                <div className="form-group">
                    <label htmlFor="checkInDate"></label>
                    <input
                        placeholder='Enter Checkin Date'
                        type="text"
                        id="checkInDate"
                        name="checkInDate"
                        value={checkInDate}
                        onChange={handleChange}
                    />
                    {errors.checkInDate && <p style={{ color: 'red' }}>{errors.checkInDate}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="checkOutDate"></label>
                    <input
                        placeholder='Enter Checkout Date'
                        type="text"
                        id="checkOutDate"
                        name="checkOutDate"
                        value={checkOutDate}
                        onChange={handleChange}
                    />
                    {errors.checkOutDate && <p style={{ color: 'red' }}>{errors.checkOutDate}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="noOfAcRooms"></label>
                    <input
                        placeholder='Enter number of AC Rooms'
                        type="text"
                        id="noOfAcRooms"
                        name="noOfAcRooms"
                        value={noOfAcRooms}
                        onChange={handleChange}
                    />
                    {errors.noOfAcRooms && <p style={{ color: 'red' }}>{errors.noOfAcRooms}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="noOfNonAcRooms"></label>
                    <input
                        placeholder='Enter number of Non-Ac Rooms'
                        type="text"
                        id="noOfNonAcRooms"
                        name="noOfNonAcRooms"
                        value={noOfNonAcRooms}
                        onChange={handleChange}
                    />
                    {errors.noOfNonAcRooms && <p style={{ color: 'red' }}>{errors.noOfNonAcRooms}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="noOfDeluxRooms"></label>
                    <input
                        placeholder='Enter number Of Delux Rooms'
                        type="text"
                        id="noOfDeluxRooms"
                        name="noOfDeluxRooms"
                        value={noOfDeluxRooms}
                        onChange={handleChange}
                    />
                    {errors.noOfDeluxRooms && <p style={{ color: 'red' }}>{errors.noOfDeluxRooms}</p>}
                </div>
                <center>
                    <button className="btn btn-outline-secondary" type="submit">Reserve Room</button>
                </center>
            </form>
        </div>
    )
}

export default ReserveRoomController;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CancelReservationValidation from '../../Validations/CancelReservationValidation';

const CancelController = () => {
    const [data, setData] = useState({
        bookingId: '',
        acRooms: '',
        nonAcRooms: '',
        deluxRooms: ''
    });

    const { bookingId, acRooms, nonAcRooms, deluxRooms } = data;
    const navigate = useNavigate();

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = CancelReservationValidation(data);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            handleCancelRoom();
        }
    };

    const handleCancelRoom = () => {
        navigate('/cancelService', { state: { bookingId, acRooms, nonAcRooms, deluxRooms } });
    };

    return (
        <div className='container' style={{ width: "400px" }}>
            <h2>User Input</h2>
            <form onSubmit={handleSubmit} className='form-control'>
                <div className="form-group">
                    <label htmlFor="bookingId"></label>
                    <input
                        placeholder='Booking Id'
                        type="text"
                        id="bookingId"
                        name="bookingId"
                        value={bookingId}
                        onChange={handleChange}
                    />
                    {errors.bookingId && <p style={{ color: 'red' }}>{errors.bookingId}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="acRooms"></label>
                    <input
                        placeholder='AC Rooms'
                        type="text"
                        id="acRooms"
                        name="acRooms"
                        value={acRooms}
                        onChange={handleChange}
                    />
                    {errors.acRooms && <p style={{ color: 'red' }}>{errors.acRooms}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="nonAcRooms"></label>
                    <input
                        placeholder='Non-AC Rooms'
                        type="text"
                        id="nonAcRooms"
                        name="nonAcRooms"
                        value={nonAcRooms}
                        onChange={handleChange}
                    />
                    {errors.nonAcRooms && <p style={{ color: 'red' }}>{errors.nonAcRooms}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="deluxRooms"></label>
                    <input
                        placeholder='Delux Rooms'
                        type="text"
                        id="deluxRooms"
                        name="deluxRooms"
                        value={deluxRooms}
                        onChange={handleChange}
                    />
                    {errors.deluxRooms && <p style={{ color: 'red' }}>{errors.deluxRooms}</p>}
                </div>
                <center>
                    <button className="btn btn-outline-secondary" type="submit">Cancel</button>
                </center>
            </form>
        </div>
    )
}

export default CancelController;

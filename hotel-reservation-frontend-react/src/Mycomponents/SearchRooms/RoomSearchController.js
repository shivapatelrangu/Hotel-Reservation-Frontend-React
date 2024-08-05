import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchRoomValidation from '../../Validations/SearchRoomValidation';
import picture2 from '../../MyPictures/1.jpg';
import './SearchRoom.css';

const RoomSearchController = () => { 
    const [data, setData] = useState({
        fromDate: '',
        toDate: ''
    });
    const { fromDate, toDate } = data;
    const navigate = useNavigate(); 
    
    const handleChange = e => {
        setData ({...data, [e.target.name]: e.target.value});
    }

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = SearchRoomValidation(data);
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
            handleGetDetails();
        }
    };

    const handleGetDetails = () => {
        navigate('/roomSearchService', { state: { fromDate, toDate } });
    };

    return (
        <div className='container'>
            <div className='image-container'>
                {/* <img src={picture2} className="home-logo" alt="Hotel Logo" /> */}
            </div>
            <div className='content-container'>
                <h3>Checking Availability</h3>
                <form className='form-control' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fromDate">Checkin Date</label>
                        <input
                            placeholder='Enter Checkin Date'
                            type="text"
                            id="fromDate"
                            name="fromDate"
                            value={data.fromDate}
                            onChange={handleChange}
                        />
                        {errors.fromDate && <p style={{color:'red'}}>{errors.fromDate}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="toDate">Checkout Date</label>
                        <input
                            placeholder='Enter Checkout Date'
                            type="text"
                            id="toDate"
                            name="toDate"
                            value={data.toDate}
                            onChange={handleChange}
                        />
                        {errors.toDate && <p style={{color:'red'}}>{errors.toDate}</p>}
                    </div>
                    <center>
                        <div>
                            <button className="btn btn-outline-secondary" type="submit">Get Details</button>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    );
}

export default RoomSearchController;
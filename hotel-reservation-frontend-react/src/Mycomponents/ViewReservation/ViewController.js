import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewController.css'; // Import the CSS file
import Validation from '../../Validations/Validation';

const ViewController = () => { 
  const [data, setData] = useState({
    bookingId: ''
  });

  const { bookingId } = data;
  const navigate = useNavigate(); 
  
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [errors,setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const validationErrors = Validation(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      handleGetDetails();
    }
  };

  const handleGetDetails = () => {
    navigate('/viewService', { state: { bookingId } });
  };
     
  return (
    
    <div className='container' style={{width:"400px" , paddingBottom:"200px"}}>
      <h2>View Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookingId">Booking ID</label>
          <input
            placeholder='Enter your Booking ID'
            type="text"
            id="bookingId"
            name="bookingId"
            value={data.bookingId}
            onChange={handleChange}
          />
      
          {errors.bookingId && <p style={{color:'red'}}>{errors.bookingId}</p>}
        </div>
        {/* <button className="btn btn-outline-secondary" type="submit" onClick={handleGetDetails}>Get Details</button> */}
        <button className="btn btn-outline-secondary" type="submit">Get Details</button>

      </form>
    </div>
  );
}

export default ViewController;
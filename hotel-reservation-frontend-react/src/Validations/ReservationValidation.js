export default function ReservationValidation(data){
    const errors ={}

    if(data.checkInDate === ""){
        errors.checkInDate = "Checkin Date is required!"
    }
    else {
        const dateObj = new Date(data.checkInDate);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;  // Months are 0-based in JavaScript
        const day = dateObj.getDate();
        if (year !== parseInt(data.checkInDate.slice(0, 4)) || month !== parseInt(data.checkInDate.slice(5, 7)) || day !== parseInt(data.checkInDate.slice(8, 10))) {
            errors.checkInDate = "Invalid date. Please enter a valid date in the format yyyy-MM-dd.";
        }
    }

    if(data.checkOutDate === ""){
        errors.checkOutDate = "Checkout Date is required!"
    }
    else{
        const dateObj = new Date(data.checkOutDate);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; 
        const day = dateObj.getDate();
        if (year !== parseInt(data.checkOutDate.slice(0, 4)) || month !== parseInt(data.checkOutDate.slice(5, 7)) || day !== parseInt(data.checkOutDate.slice(8, 10))) {
            errors.checkOutDate = "Invalid date. Please enter a valid date in the format yyyy-MM-dd.";
        }
    }
    if(data.noOfAcRooms === ""){
        errors.noOfAcRooms = "Please enter number of Ac Rooms Required "
    }
    if(data.noOfNonAcRooms === ""){
        errors.noOfNonAcRooms = "Please enter number of Non-AC Rooms Required "
    }
    if(data.noOfDeluxRooms === ""){
        errors.noOfDeluxRooms= "Please enter number of Delux Rooms Required "
    }
   
    
    return errors; 
}

export default function CancelReservationValidation(data){
    const errors ={}
    if(data.bookingId === ""){
        errors.bookingId = "Booking Id is Required";
    }
    if(data.acRooms === ""){
        errors.acRooms = "Please enter number of Ac Rooms to cancel"
    }
    if(data.nonAcRooms === ""){
        errors.nonAcRooms = "Please enter number of Non-AC Rooms to cancel "
    }
    if(data.deluxRooms === ""){
        errors.deluxRooms= "Please enter number of Delux Rooms to cancel"
    }
    return errors; 
}

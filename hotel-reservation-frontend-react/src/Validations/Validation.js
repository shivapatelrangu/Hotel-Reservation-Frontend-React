export default function Validation(data){
    const errors ={}
    if(data.bookingId === ""){
        errors.bookingId = "Booking Id is Required";
    }
    return errors; 
}

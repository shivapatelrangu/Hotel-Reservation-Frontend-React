export default function SearchRoomValidation(data){
    const errors ={}

    
    if(data.fromDate === ""){
        errors.fromDate = "Checkin Date is required!"
    }
    else {
        const dateObj = new Date(data.fromDate);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; 
        const day = dateObj.getDate();

        if (year !== parseInt(data.fromDate.slice(0, 4)) || month !== parseInt(data.fromDate.slice(5, 7)) || day !== parseInt(data.fromDate.slice(8, 10))) {
            errors.fromDate = "Invalid date. Please enter a valid date in the format yyyy-MM-dd.";
        }
    }

    if(data.toDate === ""){
        errors.toDate = "Checkout Date is required!"
    }
    else{
        const dateObj = new Date(data.toDate);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; 
        const day = dateObj.getDate();

        if (year !== parseInt(data.toDate.slice(0, 4)) || month !== parseInt(data.toDate.slice(5, 7)) || day !== parseInt(data.toDate.slice(8, 10))) {
            errors.toDate = "Invalid date. Please enter a valid date in the format yyyy-MM-dd.";
        }
    }
    
    return errors; 
}

import BookingForm from "./BookingForm";
import {useReducer, useState} from "react";


const BookingPage = () => {

    //const availableTimes = (updateTimes, initializeTimes) => useReducer([]);

   /* const updateTimes = () =>{
       return;
    }

    const initializeTimes = useState(availableTimes); */

    return(
        <BookingForm />
    )
}

export default BookingPage;
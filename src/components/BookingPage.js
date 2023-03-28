import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import BookingForm from "./BookingForm"
import { fetchAPI, submitAPI } from "../api";


export default function BookingPage() {

    const initializeTimes = () =>{
        return fetchAPI(new Date());
    }
   
    const updateTimes = (state, action) =>{
        return fetchAPI(action.date)
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    const navigate = useNavigate();
    
    const submitForm = (formData) => {
        if(submitAPI(formData)){
            navigate("/booking-succesful")
        }
    }

    return (<>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>) 
}
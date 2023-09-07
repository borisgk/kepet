import React from "react"
import "./Landing.css"
import PetInfo from "./PetInfo"

export default function Landing() {


    return(
        <div className="container">
            <PetInfo />
            <div className="weather">Weather</div>
            <Horoscope />
            <div className="events">Events</div>
            <div className="calendar">Calendar</div>
        </div>
    )
}
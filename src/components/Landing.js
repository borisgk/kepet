import React from "react"
import "./Landing.css"
import PetInfo from "./PetInfo"

export default function Landing() {


    return(
        <div className="container">
            <div className="info"><PetInfo /></div>
            <div className="weather">Weather</div>
            <div className="horoscope">Horoscope</div>
            <div className="events">Events</div>
            <div className="calendar">Calendar</div>
        </div>
    )
}
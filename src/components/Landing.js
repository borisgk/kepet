import React from "react"
import "./Landing.css"
import Horoscope from "./Horoscope"

export default function Landing() {


    return(
        <div className="container">
            <div className="info">Info</div>
            <div className="weather">Weather</div>
            <Horoscope/>
            <div className="events">Events</div>
            <div className="calendar">Calendar</div>
        </div>
    )
}
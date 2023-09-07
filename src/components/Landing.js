import React from "react"
import "./Landing.css"
<<<<<<< HEAD
import Horoscope from "./Horoscope"
=======
import PetInfo from "./PetInfo"
>>>>>>> ec4b7cdf2ff3d924077f1596ddf51fc073cae5f5

export default function Landing() {


    return(
        <div className="container">
            <div className="info"><PetInfo /></div>
            <div className="weather">Weather</div>
            <Horoscope/>
            <div className="events">Events</div>
            <div className="calendar">Calendar</div>
        </div>
    )
}
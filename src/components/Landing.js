import React, { useState } from "react"
import "./Landing.css"
import Horoscope from "./Horoscope"
import PetInfo from "./PetInfo"
import WeatherApp from "./WeatherApp/WeatherApp"
import Calendar from "./Calendar"
import Events from "./Events"
import dog from "../petdata.json"

export default function Landing() {

    let [myDog, setMyDog] = useState(dog)

    return(
        <div className="container">
            <PetInfo dog={myDog} />
            <WeatherApp dog={myDog} />
            <Horoscope dog={myDog} />
            <Events dog={myDog} />
            <Calendar dog={myDog} />
        </div>
    )
}
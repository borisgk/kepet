import React, { useEffect, useState, useRef } from "react"
import "./Landing.css"
import Horoscope from "./Horoscope"
import PetInfo from "./PetInfo"
import WeatherApp from "./WeatherApp/WeatherApp"
import Calendar from "./Calendar"
import Events from "./Events"
import dog from "../petdata.json"

export default function Landing({order, isMobile}) {

    let [myDog, setMyDog] = useState(dog)

    let LandingStyle = {}
    LandingStyle["events"] = { gridTemplateAreas: '"events info weather horoscope" "calendar calendar calendar calendar"' }
    LandingStyle["dog"] = { gridTemplateAreas: '"info weather horoscope events" "calendar calendar calendar calendar"' }
    LandingStyle["weather"] = { gridTemplateAreas: '"weather info horoscope events" "calendar calendar calendar calendar"' }
    LandingStyle["horoscope"] = { gridTemplateAreas: '"horoscope info weather events" "calendar calendar calendar calendar"' }

    let MobileStyle = {}
    MobileStyle["dog"] = { gridTemplateAreas: '"info" "weather" "horoscope" "events" "calendar"'}
    MobileStyle["weather"] = { gridTemplateAreas: '"weather" "info" "horoscope" "events" "calendar"'}
    MobileStyle["horoscope"] = { gridTemplateAreas: '"horoscope" "info" "weather" "events" "calendar"'}
    MobileStyle["events"] = { gridTemplateAreas: '"events" "info" "weather" "horoscope" "calendar"'}

    let style = ""
    if (isMobile) {
        style = MobileStyle[order]
    } else {
        style = LandingStyle[order]
    }

    return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        <div className="container" id="container" style={style}>
            <PetInfo dog={myDog} />
            <WeatherApp dog={myDog} />
            <Horoscope dog={myDog} />
            <Events dog={myDog} />
            <Calendar dog={myDog} />
        </div>
    )
}
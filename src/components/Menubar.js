import React from "react"
import "./Menubar.css"

export default function Menubar({changeOrder}) {

    return(
        <div className="menubar">
            <ul>
                <li onClick={() => changeOrder("dog")}>Dog</li>
                <li onClick={() => changeOrder("weather")}>Weather</li>
                <li onClick={() => changeOrder("horoscope")}>Horoscope</li>
                <li onClick={() => changeOrder("events")}>Events</li>
            </ul>
        </div>
    )

}
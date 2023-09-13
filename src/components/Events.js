import React, { useState } from 'react'
import "./Events.css"
import EventsTable from './EventsTable'
import events from "../events.json"
import FAB from './FAB'

export default function Events() {

    let [currentEvents, setCurrentEvents] = useState(events)

    let areToday = false
    let areYesterday = false
    let today = new Date()
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

/*    for (let ev of events) {
        let evDate = new Date(ev.date)
        console.log(evDate)
        if (evDate.toDateString() === today.toDateString()) {
            areToday = true
        }
        if (evDate.toDateString() === yesterday.toDateString()) {
            areYesterday = true
        }
    }

*/
    let eventsToday = []
    let eventsYesterday = []
    let eventsOther = []
    let stringToday = today.toDateString()
    let stringYesterday = yesterday.toDateString()

    for (let ev of events) {
        let dateCurrent = new Date(ev.date)
        let stringCurrent = dateCurrent.toDateString()
        if (stringCurrent === stringToday) {
            eventsToday.push(ev)
        } else {
            if (stringCurrent === stringYesterday) {
                eventsYesterday.push(ev)
            } else {
                eventsOther.push(ev)
            }
        }
    }


console.log(areToday, areYesterday)

    return (
        <div className='events card'>
            <div className='card-heading'>Events</div>
            {eventsToday.length ? <EventsTable events={eventsToday} title="Today" /> : null}
            {eventsYesterday.length ? <EventsTable events={eventsYesterday} title="Yesterday" /> : null}
            {eventsOther.length ? <EventsTable events={eventsOther} title="Earlier" /> : null}
            <FAB />
        </div>
    )
}

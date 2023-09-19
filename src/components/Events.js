import React, { useEffect, useState } from 'react'
import "./Events.css"
import EventsTable from './EventsTable'
import events from "../events.json"
import FAB from './FAB'
import EventForm from './EventForm'
import { readEvents, writeEvents } from '../Storage'

export default function Events() {

    let [currentEvents, setCurrentEvents] = useState([])
    let [showForm, setShowForm] = useState(false)

    let [eventsToday, setEventsToday] = useState([])
    let [eventsYesterday, setEventsYesterday] = useState([])
    let [eventsTomorrow, setEventsTomorrow] = useState([])
    let [eventsFuture, setEventsFuture] = useState([])
    let [eventsPast, setEventsPast] = useState([])

    let [selectedEvent, setSelectedEvent] = useState(null)



    let areToday = false
    let areYesterday = false
    let today = new Date()
    today.setHours(0,0,0,0)
    let yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    let stringToday = today.toDateString()
    let stringYesterday = yesterday.toDateString()
    let stringTomorrow = tomorrow.toDateString()


    useEffect(() => {
        let theEvents = readEvents()
        if (theEvents) {
            for (let i in theEvents) {
                theEvents[i].id = i
            }
            writeEvents(theEvents)
            setCurrentEvents(theEvents)
        } else {
            setCurrentEvents(events)
        }
    }, [])

    useEffect(() => {

        let evPast = currentEvents.filter((ev) => {
            let theDate = new Date(ev.date)
            theDate.setHours(0,0,0,0)
            return theDate < yesterday
        })
        setEventsPast(evPast)

        let evToday = currentEvents.filter((ev) => {
            let theDate = new Date(ev.date)
            let theString = theDate.toDateString()
            return theString === stringToday
        })
        setEventsToday(evToday)

        let evTomorrow = currentEvents.filter((ev) => {
            let theDate = new Date(ev.date)
            let theString = theDate.toDateString()
            return theString === stringTomorrow
        })
        setEventsTomorrow(evTomorrow)

        let evYesterday = currentEvents.filter((ev) => {
            let theDate = new Date(ev.date)
            let theString = theDate.toDateString()
            return theString === stringYesterday
        })
        setEventsYesterday(evYesterday)

        let evFuture = currentEvents.filter((ev) => {
            let theDate = new Date(ev.date)
            theDate.setHours(0,0,0,0)
            return theDate > tomorrow
        })
        setEventsFuture(evFuture)

        if (currentEvents.length > 0) {
            writeEvents(currentEvents)
        }

    }, [currentEvents])

    function displayForm() {
        let newEvent = {date: today.toISOString().split('T')[0], time: "09:00"}
        console.log(newEvent)
        setSelectedEvent(newEvent)
        setShowForm(true)
    }

    function cancelForm() {
        setShowForm(false)
    }

    function submitForm(date, time, category, location, duration, comment, id) {
        let newEvents = []
        if (id >= 0) {
            // edit an existing event
            let newEvent = {id: id, date: date, time: time, category: category, location: location, duration: duration, comment: comment}
            newEvents = [...currentEvents]
            newEvents[id] = newEvent
        } else {
            // create a new event
            let newID = currentEvents.length
            let newEvent = {id: newID, date: date, time: time, category: category, location: location, duration: duration, comment: comment}
            newEvents = [...currentEvents, newEvent]
        }
        setCurrentEvents(newEvents)
        writeEvents(newEvents)
        setShowForm(false)
    }

    function editEvent(event) {
        setSelectedEvent(event)
        setShowForm(true)
        console.log(event)
    }

    function deleteEvent(event) {
        let newEvents = currentEvents.filter((ev) => {
            return ev.id !== event.id
        })
        // renumber the events
        for (let i in newEvents) {
            newEvents[i].id = i
        }

        setCurrentEvents(newEvents)
        setShowForm(false)
    }


    return (
        !showForm ?
        
        <div className='events card'>
            
                <EventsTable events={eventsFuture} title="Future" editFunc={editEvent} />
                <EventsTable events={eventsTomorrow} title="Tomorrow" editFunc={editEvent} />
                <EventsTable events={eventsToday} title="Today" editFunc={editEvent} />
                <EventsTable events={eventsYesterday} title="Yesterday" editFunc={editEvent} />
                <EventsTable events={eventsPast} title="Earlier" editFunc={editEvent} />
                <FAB handleClick={displayForm} />
        </div>

        :

        <div className='eventform card'>
            <div className='card-heading'>Event</div>
            <EventForm cancelForm={cancelForm} submitForm={submitForm} evnt={selectedEvent} deleteEvent={deleteEvent}/>
        </div>
    )
}

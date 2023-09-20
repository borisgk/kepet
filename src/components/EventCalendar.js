import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment, { duration } from 'moment';
import events from "../events.json"
//import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { readEvents, writeEvents } from '../Storage'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)


// mongoose
//     .connect("mongodb+srv://gvrsrg:wwwwww@cluster0.aejpaco.mongodb.net/mern?retryWrites=true&w=majority")
//     .then( () => console.log("Database connected"))
//     .catch((err) => console.log("DB error", err))

export default function EventCalendar(props) {


    const newEvent = (eventKepet) => {
      var [year,month,day] = eventKepet.date.split('-')
      var [hour, minute] = eventKepet.time.split(':')
      var startDate = new Date(year,month-1, day, hour, minute)
      var duration = eventKepet.duration
      var endDate = new Date()
      endDate.setTime(startDate.getTime() + duration*1000*60)
      //var title = [eventKepet.category,eventKepet.location,eventKepet.comment].join("\n")
      var title = [eventKepet.category,eventKepet.comment].join("\n")
        return {
        title: title,
        start: startDate.toJSON(),
        end: endDate.toJSON(),
        allDay: false,
        }
    }
    var eventList = []
    // const getEvents = async () => {
    //     await EventModel.find( (err, events) =>{
    //       if (err) {

    //       }else {
    //         eventList = [...events]
    //         console.log(events)
    //       }
    //     })

    // }
    let theEvents = readEvents()
    var eventList = theEvents==undefined ? events.map(e => newEvent(e)) : theEvents.map(e => newEvent(e))
    console.log(eventList)

    //const DnDCalendar = withDragAndDrop(Calendar);

    return (
      <div className='calendar'>
          <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={ eventList }
          />
      </div>
    )
}

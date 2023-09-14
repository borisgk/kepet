import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from "../events.json"


const localizer = momentLocalizer(moment)

export default function EventCalendar(props) {

    const newEvent = (title, start, end) => {
        return {title:title,
            start:start,
            end:end
        }
    }

    var eventList = [
        {
          title: "Meeting with Client",
          start: new Date("2023-09-15T10:00:00"),
          end: new Date("2023-09-15T11:30:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Team Lunch",
          start: new Date("2023-09-16T12:30:00"),
          end: new Date("2023-09-16T13:30:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Conference Call",
          start: new Date("2023-09-17T15:00:00"),
          end: new Date("2023-09-17T16:30:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Project Deadline",
          start: new Date("2023-09-20T09:00:00"),
          end: new Date("2023-09-20T17:00:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Training Workshop",
          start: new Date("2023-09-22T14:00:00"),
          end: new Date("2023-09-22T16:00:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Company Retreat",
          start: new Date("2023-09-25T09:00:00"),
          end: new Date("2023-09-27T17:00:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Product Launch",
          start: new Date("2023-09-28T13:00:00"),
          end: new Date("2023-09-28T15:30:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Team Building Activity",
          start: new Date("2023-09-30T11:00:00"),
          end: new Date("2023-09-30T13:00:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Client Presentation",
          start: new Date("2023-10-03T14:30:00"),
          end: new Date("2023-10-03T16:00:00"),
          allDay: false,
          resource: null,
        },
        {
          title: "Project Review",
          start: new Date("2023-10-05T09:30:00"),
          end: new Date("2023-10-05T11:00:00"),
          allDay: false,
          resource: null,
        },
      ];//events.map((e)=>{newEvent(e.comment, new Date(e.date+e.time), new Date(e.date+e.time))})
    console.log(events)

  return (
    <div className='calendar'>
        <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={eventList}
        style={{ height: 500 }}
        />
    </div>
  )
}

import React from 'react'
import "./Events.css"

function printDate(dateString) {
    let myDate = new Date(dateString)
//    let formattedDate = myDate.getDate() + " " + myDate.getMonth()
    let formattedDate = myDate.toLocaleString('default', {day: '2-digit', month: 'short'})
    return formattedDate
}

export default function EventsTable({events, title}) {
  return (
    <div className='events-section'>
                    <div className='card-subheading'>{title}</div>
                    <div>
                        <table className='events-table'>
                            {events.map((e) =>
                                <tr className='event-row'>
                                    <td className='ev-date'>{printDate(e.date)}</td>
                                    <td className='ev-time'>{e.time}</td>
                                    <td className='ev-category'>{e.category}</td>
                                    <td className='ev-duration'>{e.duration}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
  )
}

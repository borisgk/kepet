import React, { useState } from 'react'
import "./EventForm.css"

export default function EventForm({cancelForm, submitForm, evnt, deleteEvent}) {


    let [myDate, setMyDate] = useState(evnt.date)
    let [myTime, setMyTime] = useState(evnt.time)
    let [myCategory, setMyCategory] = useState(evnt.category)
    let [myLocation, setMyLocation] = useState(evnt.location)
    let [myDuration, setMyDuration] = useState(evnt.duration)
    let [myComment, setMyComment] = useState(evnt.comment)
    let [myID, setMyID] = useState(evnt.id)


  return (
    <div>
        <form className='event-form'>
            <div>
                <label for="date">Date</label>
                <input type='date' name='date' onChange={(event) => setMyDate(event.target.value)} defaultValue={myDate}></input>
            </div>
            <div>
                <label for="time">Time</label>
                <input type='time' name='time' onChange={(event) => setMyTime(event.target.value)} defaultValue={myTime}></input>
            </div>
            <div>
                <label for="category">Category</label>
                <input type='text' name='category' onChange={(event) => setMyCategory(event.target.value)} defaultValue={myCategory}></input>
            </div>
            <div>
                <label for="location">Location</label>
                <input type='text' name='location' onChange={(event) => setMyLocation(event.target.value)} defaultValue={myLocation}></input>
            </div>
            <div>
                <label for="duration">Duration</label>
                <input type='text' name='duration' onChange={(event) => setMyDuration(event.target.value)} defaultValue={myDuration}></input>
            </div>
            <div>
                <label for="comment">Comment</label>
                <textarea name='comment' rows={5} onChange={(event) => setMyComment(event.target.value)} defaultValue={myComment}></textarea>
            </div>
            <button onClick={(event) => {
                cancelForm()
                event.preventDefault()
            }}>Cancel</button>
            <button onClick={(event) => {
                submitForm(myDate, myTime, myCategory, myLocation, myDuration, myComment, myID)
                event.preventDefault()
            }}>Save</button>
            {evnt.id ?
                <button onClick={(event) => {
                    deleteEvent(evnt)
                    event.preventDefault()
                }}>Delete</button>
            : null}
        </form>
    </div>
  )
}

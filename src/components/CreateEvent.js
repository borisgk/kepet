import React, { useState } from "react"
import { eventsRef } from "./firebase"

function CreateEvent() {
	const [ event, setEvent ] = useState("")

	const createEvent = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		const item = {
			task: event,
			done: false
		}
		eventsRef.push(item)
		setEvent("")
	}

	return (
		<form onSubmit={createEvent}>
			<input type="text" value={event} onChange={(e) => setEvent(e.target.value)} placeholder="Create a note" />
		</form>
	)
}

export default CreateEvent
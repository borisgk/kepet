function writeEvents(events) {
    localStorage.setItem('events', JSON.stringify(events))
}

function readEvents() {
    let data = localStorage.getItem('events')
    if (data) {
        return JSON.parse(data)
    } else {
        return null
    }
}

export {
    writeEvents,
    readEvents
}  
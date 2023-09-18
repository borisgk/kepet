import React from "react"

export default function FAB({handleClick}) {
    return(
        <button className="fab" onClick={event => handleClick()}>+</button>
    )
}
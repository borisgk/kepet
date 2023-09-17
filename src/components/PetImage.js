import React from "react"

export default function PetImage({pet}) {

    return(
        <div className="petimage" style={{backgroundImage: `url("${pet.image}")`}}>
        </div>
    )
}
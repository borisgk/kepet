import React from "react"

export default function PetImage({pet}) {

    console.log(pet.image)

    return(
        <div className="petimage" style={{backgroundImage: `url("${pet.image}")`}}>
        </div>
    )
}
import React from "react"
import "./PetInfo.css"

export default function PetImage({pet}) {

    let imageNumber = Math.floor(Math.random() * pet.image.length);
    let image = pet.image[imageNumber]

    return(
        <div className="petimage" style={{backgroundImage: `url("${image}")`}}>
        
        </div>
    )   
}
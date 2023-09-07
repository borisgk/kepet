import React, { useEffect, useState } from "react"
import "./PetInfo.css"
import PetImage from "./PetImage"
import PetName from "./PetName"
import PetData from "./PetData"
import FAB from "./FAB"

import pet from "../petdata.json"

export default function PetInfo() {

    let [myPet, setMyPet] = useState(pet)

    return(
        <div className="petinfo">
            <PetImage pet={myPet} />
            <PetName pet={myPet} />
            <PetData pet={myPet} />
            <FAB />
        </div>
    )
}
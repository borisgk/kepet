import React, { useEffect, useState } from "react"
import "./PetInfo.css"
import PetImage from "./PetImage"
import PetName from "./PetName"
import PetData from "./PetData"
import FAB from "./FAB"

export default function PetInfo({dog}) {

    function handleClick() {
        alert("not implemented")
    }

    return(
        <div className="petinfo">
            <PetImage pet={dog} />
            <PetName pet={dog} />
            <PetData pet={dog} />
        </div>
    )
}
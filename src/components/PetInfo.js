import React, { useEffect, useState } from "react"
import "./PetInfo.css"
import PetImage from "./PetImage"
import PetName from "./PetName"
import PetData from "./PetData"
import FAB from "./FAB"

export default function PetInfo({dog}) {

    return(
        <div className="petinfo">
            <PetImage pet={dog} />
            <PetName pet={dog} />
            <PetData pet={dog} />
            <FAB />
        </div>
    )
}
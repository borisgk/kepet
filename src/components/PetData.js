import React from "react"



export default function PetData({pet}) {
    return(
        <div className="petdata">
            <div className="parameter">Breed: {pet.breed}</div>
            <div className="parameter">Birth: {pet.birthDate}</div>
            <div className="parameter">Color: {pet.color}</div>
            <div className="parameter">Number: {pet.number}</div>
            <div className="parameter">Weight: {pet.weight} kg</div>
        </div>
    )
}
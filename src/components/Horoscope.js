import React, { useState } from 'react'
import {getSign, getHoroscope} from './HoroscopeUtils'

export default function Horoscope({dog}) {
  let [horoText, setHoroText] = useState("")
  var birthDate = new Date(dog.birthDate)

  const setHoroscope = (text) => {setHoroText(text)}



  var sign = getSign(birthDate.getMonth(), birthDate.getDate())
  //setHoroscope(getHoroscope(sign.name))
  //horoText = getHoroscope(sign.name)

  return (
    <div className='horoscope card'>
      <h2>Horoscope</h2>
      <p>{dog.name}'s sign is {sign.symbol} {sign.name}</p>
      <p>{horoText}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import {getSign, getHoroscope, getRandomFact} from './HoroscopeUtils'
import Reminders from './Reminders'

export default function Horoscope({dog}) {
  var birthDate = new Date(dog.birthDate)

  var sign = getSign(birthDate.getMonth(), birthDate.getDate())
  var horoscope = getHoroscope(sign.name)  
  const [horoText, setHoroText] = useState(horoscope)
  //setHoroscope(getHoroscope(sign.name))
  useEffect(()=>getRandomFact(setHoroText),[])


  return (
    <div className='horoscope card'>
      <h2>Horoscope</h2>
      <p>{dog.name}'s sign is {sign.symbol} {sign.name}</p>
      <p>{horoText}</p>
      <Reminders showRegular={true}/>
    </div>
  )
}

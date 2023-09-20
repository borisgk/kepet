import React, { useEffect, useState } from 'react'
import {getSign, getHoroscope, getRandomFact} from './HoroscopeUtils'
import Reminders from './Reminders'
import "./Events.css"
import "./Horoscope.css"

export default function Horoscope({dog}) {
  var birthDate = new Date(dog.birthDate)

  var sign = getSign(birthDate.getMonth(), birthDate.getDate())
  var horoscope = getHoroscope(sign.name)  
  const [horoText, setHoroText] = useState(horoscope)
  //setHoroscope(getHoroscope(sign.name))
  useEffect(()=>getRandomFact(setHoroText),[])


  return (
    <div className='horoscope card'>
      <div className='card-heading'>Horoscope</div>
      <div className='horo-sign'>{dog.name}'s sign is {sign.symbol} {sign.name}</div>
      <div className='horo-text'>{horoText}</div>
      <Reminders showRegular={true}/>
    </div>
  )
}

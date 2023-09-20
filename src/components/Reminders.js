import React, { useEffect, useState } from 'react'
import reminders from '../TipsAndReminders.json'
import "./Horoscope.css"

export default function Reminders(props) {
    const [regularTip, setRegularTip] = useState("")
    const [seasonalReminder, setSeasonalReminder] = useState("")
    const [generalTip, setGeneralTip] = useState("")
    const regularTipsAndReminders = reminders.RegularTipsAndReminders
    const seasonalReminders = reminders.SeasonalReminders
    const generalTips = reminders.GeneralTips
    const showRegular = props.showRegular || false
    const showSeasonal = props.showSeasonal || false
    const showGeneral = props.showGeneral || false


    useEffect(()=>{
      const getRandomTip = function(tipArray){
        let randTip = tipArray[(Math.random() * tipArray.length) | ""]
        return randTip.Tip
      }   
      setRegularTip(getRandomTip(regularTipsAndReminders))
      setSeasonalReminder(getRandomTip(seasonalReminders))    
      setGeneralTip(getRandomTip(generalTips))
    },[])

        // <p>{seasonalReminder}</p>
        // <p>{generalTip}</p>  

  return (
    <div className='reminders'>
        <div className='card-heading'>Tips and Reminders</div>
        {showRegular? 
          <div className='tip'>{regularTip}</div>
          :""
        }
        {showSeasonal? 
          <div className='tip'>{seasonalReminder}</div>
          :""
        }
        {showGeneral? 
          <div className='tip'>{generalTip}</div>
          :""
        }
      
    </div>
  )
}

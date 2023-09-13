import React, { useEffect, useState } from 'react'
import reminders from '../TipsAndReminders.json'

export default function Reminders() {
    const [regularTip, setRegularTip] = useState("")
    const [seasonalReminder, setSeasonalReminder] = useState("")
    const [generalTip, setGeneralTip] = useState("")
    const regularTipsAndReminders = reminders.RegularTipsAndReminders
    const seasonalReminders = reminders.SeasonalReminders
    const generalTips = reminders.GeneralTips


    useEffect(()=>{
      const getRandomTip = function(tipArray){
        let randTip = tipArray[(Math.random() * tipArray.length) | ""]
        return randTip.Tip
      }   
      setRegularTip(getRandomTip(regularTipsAndReminders))
      setSeasonalReminder(getRandomTip(seasonalReminders))    
      setGeneralTip(getRandomTip(generalTips))
    },[])



  return (
    <div className='reminders'>
        <h1>Tips and Reminders</h1><br/>
        <p>{regularTip}</p>
        <p>{seasonalReminder}</p>
        <p>{generalTip}</p>        
    </div>
  )
}

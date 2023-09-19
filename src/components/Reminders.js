import React, { useEffect, useState } from 'react'
import reminders from '../TipsAndReminders.json'

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
        <h3>Tips and Reminders</h3><br/>
        {showRegular? 
          <p>{regularTip}</p>
          :""
        }
        {showSeasonal? 
          <p>{seasonalReminder}</p>
          :""
        }
        {showGeneral? 
          <p>{generalTip}</p>
          :""
        }
      
    </div>
  )
}

import React, { useRef, useEffect } from 'react'
import { useState } from 'react'

import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Menubar from './components/Menubar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Reminders from './components/Reminders';

function App() {
  
  const [cardOrder, setCardOrder] = useState("dog")
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    function handleWindowResize() {
      let size = getWindowSize()
      if (size.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
      setWindowSize(size);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function changeOrder(order) {
    setCardOrder(order)
    console.log(order)
  }

  function getWindowSize() {
    const {innerWidth, innerHeight} = window
    return {innerWidth, innerHeight}
  }

  return (
    <div className="App">
      <Menubar changeOrder={changeOrder} />
     <Landing order={cardOrder} isMobile={isMobile} />
    </div>
  );
}

export default App;

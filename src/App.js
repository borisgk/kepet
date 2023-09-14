import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Menubar from './components/Menubar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Reminders from './components/Reminders';

function App() {
  

  return (
    <div className="App">
      <Menubar />
      <Reminders />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

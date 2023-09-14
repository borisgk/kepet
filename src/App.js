import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Menubar from './components/Menubar';
import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
  

  return (
    <div className="App">
      <Menubar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import LocationContextProvider from "./components/WeatherChart/locationContext";
import CurrentWeatherContextProvider from "./components/WeatherChart/currentWeatherContext";
import AppContainer from "./components/WeatherChart/appContainer";

class App extends React.Component {
  render() {
    return (
      <div className="WeatherChat">
        <div className="header">
          <h4>Weather Chart</h4>
        </div>
        <LocationContextProvider>
          <CurrentWeatherContextProvider>
            <AppContainer />
          </CurrentWeatherContextProvider>
        </LocationContextProvider>
      </div>
    );
  }
}

export default App;

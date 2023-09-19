import React, { useContext } from 'react';
import DayCard from './DayCard';
import HourlyChart from './HourlyChart';
import { CurrentWeatherContext } from './currentWeatherContext';
import { LocationContext } from './locationContext';
import SearchButton from './SeachButton';

const AppContainer = () => {
    const locationContext = useContext(LocationContext);
    const { position } = locationContext.location;

    return (
        <CurrentWeatherContext.Consumer>
            {(context) => {
                const currentWeather = context.currentWeather;
                if (currentWeather) {
                    const dailyData = currentWeather.dailyData;
                    const hourlyData = currentWeather.hourlyData;
                    const setSelectedDayWeather = context.setSelectedDayWeather;
                    return (
                        <div className="container">
                            {!position ? (
                                <div className="circular-progress">
                                    <div className="spinner"></div>
                                </div>
                            ) : (
                                <SearchButton
                                    position={position}
                                    setCurrentLocation={locationContext.setCurrentLocation}
                                />
                            )}
                            <DayCard
                                dailyData={dailyData}
                                setSelectedDayWeather={setSelectedDayWeather}
                            />
 
                                            <HourlyChart
                                todayWeather={context.selectedDayWeather}
                                hourlyData={hourlyData}
                            />



                       </div>
                    );
                } else {
                    return (
                        <div className="container">
                            <div className="circular-progress">
                                <div className="spinner"></div>
                            </div>
                        </div>
                    );
                }
            }}
        </CurrentWeatherContext.Consumer>
    );
};

export default AppContainer;
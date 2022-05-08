import React, { useState} from 'react';
import useWeather from '../hooks/useHTTP';

const Weather = () => {

    const [temperature, setTemperature] = useState(true)
    const {name,country,description,speed,all,pressure,icon,c,f} = useWeather()

    return (
        
        <div className='container'>

            <h2>Weather App</h2>
            <div>
                <p>City and country: </p><p>{name} {country}</p>
            </div>
            <div>
                <p>Time description: </p><p>{description}</p>
            </div>
            <div className='time-description'>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="climate"/>
                </div>
                <div className='time-container'>
                    <div>
                        <p>wind speed: </p><p>{speed}</p>
                    </div>
                    <div>
                        <p>clouds: </p><p>{all}%</p>
                    </div>
                    <div>
                        <p>pressure: </p><p>{pressure}mb</p>
                    </div>
                </div>
            </div>
            {temperature? <div><p>Temperature: </p><p>{c}°C</p></div> : <div><p>Temperature: </p><p>{f}°F</p></div>}
            <button onClick={()=>setTemperature(!temperature)}>{temperature? "°F?": "°C?"}</button>

        </div>
        
    );
};

export default Weather;
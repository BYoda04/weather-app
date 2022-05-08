import {useEffect, useState} from 'react';
import axios from 'axios';

const useWeather = () => {

    const [name,setName] = useState()
    const [country,setCountry] = useState()
    const [description,setDescription] = useState()
    const [speed,setSpeed] = useState()
    const [all,setAll] = useState()
    const [pressure,setPressure] = useState()
    const [icon,setIcon] = useState()
    const [c,setC] = useState()
    const [f,setF] = useState()

    useEffect(()=>{

        function success(pos) {
          let crd = pos.coords;
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=d4810d6ce55ced2a72644b63f1b4332b`)
            .then(res => {
                
                console.log(res !== undefined? "cargando" : "cargado");
                setName(res.data.name)
                setCountry(res.data.sys.country)
                setDescription(res.data.weather[0].description)
                setSpeed(res.data.wind.speed)
                setAll(res.data.clouds.all)
                setPressure(res.data.main.pressure)
                setIcon(res.data.weather[0].icon)
                setC(((res.data.main.temp) - 273.15).toFixed(2))
                setF(((18/10) * ((res.data.main.temp) - 273.15) + 32).toFixed(2))
              
            })
            .catch(error => console.log(error))
        };
              
        function err(er) {
          console.log(er.message); 
        };
                
        navigator.geolocation.getCurrentPosition(success, err);
    
      },[])

    return {name,country,description,speed,all,pressure,icon,c,f}
};

export default useWeather;
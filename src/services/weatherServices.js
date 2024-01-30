
const API_Key = '753e93f09f553f4c40e54e170998a5c8'
 const Base_URL = 'https://api.openweathermap.org/data/2.5'
 
 const getWeatherData = (infoType, searchParams)=>{
    const url = new URL (Base_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_Key})

    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data)
 }
 const formatCurrentWeather =(data)=>{
   const {
      coord:{lat, lon},
      main:{temp,feels_like,temp_min, temp_max, humidity},
      name,
      dt,
      sys:{country, sunrise, sunset},
      weather,
      wind:{speed}
   }=data

   const {main: details , icon} =weather[0]

   return {lat, lon,temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details,icon, speed}
 }
 const getFormattedWeatherData =async (searchParams)=>{
   const formattedCurrentWeather = await getWeatherData('weather', searchParams)
   .then(formatCurrentWeather)
   return formattedCurrentWeather

 }
 export default getFormattedWeatherData;
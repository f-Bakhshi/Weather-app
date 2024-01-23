const API_Key = '8c45d32d5a829f540e3f0e7e55ced7ce'
 const Base_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
 
 const getWeatherData = (infoType, searchParams)=>{
    const url = new URL (Base_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_Key})

    console.log(url)
    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data)
 }
 
 export default getWeatherData;
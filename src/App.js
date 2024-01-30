import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Input';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import ForCast from './components/ForCast';
import getFormattedWeatherData from './services/weatherServices';

// import UimReact from '@iconscout/react-unicons-monochrome/icons/uim-react'

function App() {
  const fetchWeather = async()=>{
     const data = await getFormattedWeatherData( {q: 'herat'});
     console.log(data)
  }

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <Details/>
      <ForCast title="Hourly Forcast"/>
      <ForCast title="Daily Forcast"/>

    </div>
  );
}

export default App;

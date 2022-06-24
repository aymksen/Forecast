//import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatueAndDetails from './components/TemperatueAndDetails';
/* eslint-disable */
import Cloud from './components/Effects/Cloud/Cloud';
import Snow from './components/Effects/Snow/Snow';
import Cloud2 from './components/Effects/Cloud2/Cloud2';
import Rain from './components/Effects/Rain/Rain'
import Sunny from './components/Effects/Sunny/Sunny';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32  h-fit shadow-xl shadow-black-400 ff'>
      
      <div id="color-blue">
      <Sunny />
      {/* <div id="Cloud"><Cloud/></div>
      <div id="Cloude"><Cloud2/></div>
        <div id="Snow"><Snow/></div>
        <Rain/> */}

          <Rain/>
        </div>
        
    <TopButton />
    <Inputs />

    <TimeAndLocation />
    <TemperatueAndDetails />
    
    </div>
  );
}

export default App;

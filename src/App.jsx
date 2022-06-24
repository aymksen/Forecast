//import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatueAndDetails from './components/TemperatueAndDetails';
import Cloud from './components/Effects/Cloud/Cloud';
import Snow from './components/Effects/Snow/Snow';
import Cloud2 from './components/Effects/Cloud2/Cloud2';
import Rain from './components/Effects/Rain/Rain'


function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32  h-fit shadow-xl shadow-black-400 ff'>
      <div id="color-blue">
      
      {/* <div id="Cloud"><Cloud/><Cloud2/></div>
      <div id="Cloude"><Cloud2/></div>
        <div id="Snow"><Snow/></div> */}
        
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


import { Navbar } from './Components/Navbar';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { Home } from './Components/Home';
import { Destination } from './Components/Destination';
import { Crew } from './Components/Crew';
import { Technology } from './Components/Technology';
import "./css/App.css"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/crew' element={<Crew/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from './HomeScreen';
import About from './About';
import Event from './Event';
import Part from './Part';
import Sponsor from './Sponsor';
import Animation from './Animation';
import Footer from './Footer';
import Nav from './Nav';


function App() {
  return (
    <div className="app">
      
      
      <BrowserRouter >
      
        <Routes >
              
              <Route path="/" element={<HomeScreen />} />
              <Route path='/about' element={<About/>}/>
              <Route path='/event' element={<Event/>}/>
              <Route path='/sponsor' element={<Sponsor/>}/>
              <Route path='/part' element={<Part/>}/>
              <Route path='/door' element={<Animation/>}/>
              <Route path='/foot' element={<Footer/>}/>
              <Route path='/nav' element={<Nav/>}/>
        </Routes>
            
        
      </BrowserRouter>
      

    </div>
  );
}
export default App;



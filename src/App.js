import './App.css';
// Below we import the router from react-router-dom
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Forthcomponent from './components/Forthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Notfound from './components/Notfound';
// Below we import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>      
      </header>
      <nav>
        <Link to={"/"} className='ourlink'>Home</Link>
        <Link to={"second"} className='ourlink'>Second</Link>
        <Link to={"third"} className='ourlink'>Third</Link>
        <Link to={"forth"} className='ourlink'>Forth</Link>
        <Link to={"fifth"} className='ourlink'>Fifth</Link>
        <Link to={"sixth"} className='ourlink'>Sixth</Link>
        <Link to={"seventh"} className='ourlink'>Seventh</Link>
      </nav>
      {/* Below we render our component */}
      
      {/* Below are different routes for my application*/}
      <Routes>
        <Route path='/' element={<Firstcomponent/>}/>
        <Route path='/second' element={<Secondcomponent/>}/>
        <Route path='third' element={<Thirdcomponent/>}/>
        <Route path='forth' element={<Forthcomponent/>}/>
        <Route path='fifth' element={<Fifthcomponent/>}/>
        <Route path='sixth' element={<Sixthcomponent/>}/>
        <Route path='seventh' element={<Seventhcomponent/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

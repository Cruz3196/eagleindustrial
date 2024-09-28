import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, About, Services, Safety, Contact} from './pages/index';
import {Navbar} from './components/index';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Safety' element={<Safety/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

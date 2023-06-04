
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Naruci from './components/Naruci';
import Lokacija from './components/Lokacija';
import ONama from './components/ONama';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path="/slastice" element={<Menu/>}> </Route>
          <Route path="/naruci" element={<Naruci/>}> </Route>
          <Route path="/lokacija" element={<Lokacija/>}> </Route>
          <Route path="/oNama" element={<ONama/>}> </Route>
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;


import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeroContact from './Components/HeroContact/HeroContact';
import Location from './Components/Location/Location';
import Medic from './Components/Medici/Medic';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <HeroContact/>
      <Medic/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;

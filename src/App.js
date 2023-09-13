import './App.css';
import Nav from "./components/Nav";
import LandingProduct from './components/LandingProduct';
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import TopSold from "./components/TopSold";


function App() {

  return (
    <div className="App">
      <Nav/>
      <LandingProduct/>
      <TopSold/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;

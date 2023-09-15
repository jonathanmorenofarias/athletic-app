import Nav from "./components/Nav";
import LandingProduct from './components/LandingProduct';
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import TopSold from "./components/TopSold";


function App() {

  return (
    <div className="overflow-x-hidden">
      <Nav/>
      <LandingProduct/>
      <TopSold/>
      <Footer/>
    </div>
  );
}

export default App;

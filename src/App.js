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
      <LandingProduct name="WHEY Protein Powder" calories="140 Calories" protein="24g Protein" image="//gorillamind.com/cdn/shop/products/Cinnamon-Churro.png?v=1694421407&width=1028"/>
      <TopSold />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

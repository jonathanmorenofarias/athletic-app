import './App.css';
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Product image="https://cdn.imgbin.com/7/5/11/imgbin-dietary-supplement-cellucor-c4-extreme-energy-cellucor-c4-original-pre-workout-explosi-oacute-n-8tzL6eVdWiYfRnDQRkc3MHXCT.jpg" name="Preworkout" price="$49.99" />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import TopSold from "./components/TopSold";


function App() {

  return (
    <div className="App">
      <Nav className="nav"/>
      <TopSold className="nav"/>
      <Newsletter className="nav"/>
      
    </div>
  );
}

export default App;

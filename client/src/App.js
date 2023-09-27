import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./pages/global/Nav";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Footer from "./pages/global/Footer";
import Supplements from "./pages/Supplements";
import ViewProduct from "./pages/ViewProduct";
import Apparel from "./pages/Apparel";
import Accessories from "./pages/Accessories";

function App() {

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/supplements" element={<Supplements/>}/>
            <Route path="/apparel" element={<Apparel/>}/>
            <Route path="/accessories" element={<Accessories/>}/>
            <Route path="/items/:productID" element={<ViewProduct/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

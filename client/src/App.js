import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./pages/global/Nav";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Footer from "./pages/global/Footer";
import AllProducts from "./pages/AllProducts";
import ViewProduct from "./pages/ViewProduct";


function App() {

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:productType" element={<AllProducts/>}/>
            <Route path="/items/:productID" element={<ViewProduct/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

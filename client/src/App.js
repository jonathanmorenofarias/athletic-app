import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./pages/global/Nav";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Footer from "./pages/global/Footer";
import AllProducts from "./pages/AllProducts";
import ViewProduct from "./pages/ViewProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account"
import Cart from "./pages/global/Cart";
import Search from "./pages/global/Search";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'))
  const [cartOpen, setCartOpen] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItems, setCartItems] = useState([{}])

  /*<Cart
            setCartOpen={ setCartOpen } cartOpen={ cartOpen } 
            setCartTotal={ setCartTotal } cartTotal={ cartTotal } 
            cartItems={ cartItems } setCartItems={ setCartItems }
            loggedIn= { loggedIn }
            /> */
  return (
    
      <BrowserRouter>
          <Nav
            loggedIn={loggedIn} setLoggedIn={setLoggedIn} 
            cartOpen={cartOpen} setCartOpen={setCartOpen}
            cartTotal={cartTotal} setCartTotal={setCartTotal}
            searchOpen={searchOpen} setSearchOpen={setSearchOpen}
            cartItems={cartItems}
           />
           
           <Cart
            setCartOpen={ setCartOpen } cartOpen={ cartOpen } 
            setCartTotal={ setCartTotal } cartTotal={ cartTotal } 
            cartItems={ cartItems } setCartItems={ setCartItems }
            loggedIn= { loggedIn }
            />

            <Search
              searchOpen={searchOpen} setSearchOpen={setSearchOpen}
            />

          
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:productType" element={<AllProducts/>}/>
            <Route path="/items/:productID" element={<ViewProduct 
              cartOpen={cartOpen} setCartOpen={setCartOpen}
              cartTotal={cartTotal} setCartTotal={setCartTotal}
            />}/>
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/account" element={<Account loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <Footer/>
      </BrowserRouter>

  );
}

export default App;

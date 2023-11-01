import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
function Cart (props) {
    const { cartOpen, setCartOpen, cartItems, setCartItems } = props

    const toggleCart =  () => {
      fetch("/api/cart/allitems", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then (res => res.json())
      .then (data => {
        setCartItems(data)
      })
    }

    const getTotal =  () => { 
      fetch("/api/cart/total", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then (res => res.json())
      .then (data => {
        props.setCartTotal(Math.ceil((data) * 100) / 100)
      })
    }

    useEffect(() => {
      toggleCart()
      getTotal()

    }, [cartOpen])

    function removeItem (id, flavorChoice) {
        fetch("/api/cart/removeitem", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            itemID: id,
            flavorChoice: flavorChoice
          })
        })

        toggleCart()
        getTotal()
      }
  
      let cartItemsList
      if (props.loggedIn) {
        cartItemsList = cartItems.map(x => {
          return (
            <div>
              <hr />
              <div className="flex justify-between items-center my-[1.5rem] h-[6rem]">
                <img src={x.image} alt="test" className="h-[100%] " />
                <div>
                  <h1 className="font-bold text-[.75rem]">{x.name}</h1>
                  <p className="text-[.7rem]">{x.flavorChoice}</p>
                  <p>{x.quantity}</p>
                </div>
                <div className="flex flex-col justify-between items-end h-[100%]">
                  <AiOutlineClose className="cursor-pointer text-[.7rem]" onClick={ () => removeItem(x.itemID, x.flavorChoice) } />
                  <p>${(Math.ceil((x.price * x.quantity) * 100) / 100).toFixed(2)}</p>
                </div>
              </div>
            </div>
          )
        })
      }
  
      const checkout = () => {
        fetch("/api/checkout/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(cartItems)
        })
        .then(res => res.json())
        .then (({url}) => {
            window.location = url
        })
      }

  return (
      <div className={`fixed top-0 flex flex-col z-[100] justify-between bg-white md:w-[25rem] w-[90vw] h-[100vh] p-[2rem] shadow-2xl duration-500 ${cartOpen ? "right-0": "md:-right-[25rem] -right-[90vw]"}`}>
             <div>
              <AiOutlineClose onClick={() => setCartOpen(old => !old)} className=" cursor-pointer float-right"/>
                <h1 className="pb-[1rem] font-bold">CART</h1>
                {props.cartTotal === 0 && <p className="border-t-[1px] py-[1rem] font-bold text-center">YOUR CART IS EMPTY!</p>}
                {cartItemsList}
             </div>
             <div className="flex  flex-col justify-center items-center gap-[1rem] border-t-[1px] py-[2rem]">
                <div className="flex justify-between w-[100%] ">
                  <p>SUBTOTAL</p>
                  <h1>${props.cartTotal.toFixed(2)}</h1>
                </div>
                <button onClick={checkout} className="bg-black text-white font-bold w-[100%] h-[4rem]">CHECKOUT</button>
             </div>
    </div>
  );
}

export default Cart;
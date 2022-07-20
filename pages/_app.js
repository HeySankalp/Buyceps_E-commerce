import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  //when firsly the page loads
  useEffect(() => {
    try {
      if (localStorage.getItem("lsCart")) {
        setCart(JSON.parse(localStorage.getItem('lsCart')))
        saveCart(JSON.parse(localStorage.getItem('lsCart')))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear();
    }

  },[])

  //saving the cartstate to LS 
  const saveCart = (tempCart) => {
    // console.log(tempCart);
    localStorage.setItem("lsCart", JSON.stringify(tempCart));

    let subT = 0;
    let keys = Object.keys(tempCart)
    for (let i = 0; i<keys.length; i++) {
      subT += tempCart[keys[i]].price * tempCart[keys[i]].qty
    } 
    setSubTotal(subT);
   
  }



  //adding item to cartstate
  const addToCart = (itemCode, qty, price, name, desc) => {
    let tempCart = cart;
    if (itemCode in tempCart) {
      tempCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      tempCart[itemCode] ={qty, price, name, itemCode, desc} 
    }
    setCart(tempCart);
    saveCart(tempCart)
  }

  //removing item from cart
  const removeFromCart = (itemCode, qty, price, name) => {
    let tempCart = cart;
    // console.log(price);
    if (itemCode in tempCart) {
      // console.log(true);
      tempCart[itemCode].qty = tempCart[itemCode].qty - qty;
      setCart(tempCart);
    saveCart(tempCart)
    }
    if (tempCart[itemCode].qty <= 0) {
      delete tempCart[itemCode]
      setCart(tempCart);
      saveCart(tempCart)
    }
  }

  const increaseItem = (itemCode)=>{
    let tempCart = cart;
    tempCart[itemCode].qty = tempCart[itemCode].qty + 1
    setCart(tempCart)
    saveCart(tempCart)
  }

  //clearing whole cart in one go
  const clearCart = () => {
    setCart({});
    saveCart({});

  }



  return <>
    <Navbar increaseItem={increaseItem} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} clearCart={clearCart} subTotal={subTotal} />
    <Component  increaseItem={increaseItem} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp

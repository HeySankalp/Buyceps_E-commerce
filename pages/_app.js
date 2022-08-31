import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';
import Dashnav from '../components/dashnav'


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const [progress, setProgress] = useState(0);
  const [isAdmin, setIsAdmin] = useState(0);


  //when firsly the page loads
  useEffect(() => {
    try {
      // setcart
      if (localStorage.getItem("lsCart")) {
        setCart(JSON.parse(localStorage.getItem('lsCart')))
        saveCart(JSON.parse(localStorage.getItem('lsCart')))
      }
      // setuser
      if (localStorage.getItem("userToken")) {
        setUser({ value: localStorage.getItem("userToken") });
      }
      //setadmin 
      if(user.value==process.env.NEXT_PUBLIC_ADMIN){
        setIsAdmin(true);
      }
     
    
      setKey(Math.random());

    } catch (error) {
      console.error(error)
      localStorage.clear();
    }

  }, [])

  //saving the cartstate to LS 
  const saveCart = (tempCart) => {
    // console.log(tempCart);
    localStorage.setItem("lsCart", JSON.stringify(tempCart));

    let subT = 0;
    let keys = Object.keys(tempCart)
    for (let i = 0; i < keys.length; i++) {
      subT += tempCart[keys[i]].price * tempCart[keys[i]].qty
    }
    setSubTotal(subT);

  }



  //adding item to cartstate
  const addToCart = (itemCode, qty, price, name, desc, avlQty) => {
    let tempCart = cart;
    if (itemCode in tempCart && tempCart[itemCode].qty < avlQty) {
      tempCart[itemCode].qty = tempCart[itemCode].qty + qty
    } else if (itemCode in tempCart && tempCart[itemCode].qty == avlQty) {
      toast.error('item is now out of stock!')
    } else {
      tempCart[itemCode] = { qty, price, name, itemCode, desc, avlQty }
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
      tempCart[itemCode].isAvailable = true;
    }
    if (tempCart[itemCode].qty <= 0) {
      delete tempCart[itemCode]
    }
    setCart(tempCart);
    saveCart(tempCart)
  }

  //increase cart item on plus
  const increaseItem = (itemCode) => {
    let tempCart = cart;
    if (tempCart[itemCode].qty < tempCart[itemCode].avlQty) {
      tempCart[itemCode].qty = tempCart[itemCode].qty + 1
    } else if (tempCart[itemCode].qty == tempCart[itemCode].avlQty) {
      toast.error('item is now out of stock!')
    } else { }
    setCart(tempCart);
    saveCart(tempCart)
  }



  //clearing whole cart in one go
  const clearCart = () => {
    setCart({});
    saveCart({});
  }
  // loggingout from the account
  const logout = () => {
    setUser({ value: null })
    localStorage.removeItem('userToken')
    setKey(Math.random())
    toast.success("logged out successfully")
    router.push('/')
    setIsAdmin(false)
  }

  //toploading bar on routing
  useEffect(() => {
    router.events.on('routeChangeStart', () => { setProgress(40) })
    router.events.on('routeChangeComplete', () => { setProgress(100) })
  })



  return <>
    <LoadingBar
      color='#ff0078'
      progress={progress}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)}
    />
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    {
     isAdmin ?
        <Dashnav  logout={logout} /> :
        <Navbar logout={logout} user={user} setUser={setUser} key={key} increaseItem={increaseItem} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} clearCart={clearCart} subTotal={subTotal} />
    }
    <Component setIsAdmin={setIsAdmin} user={user} setUser={setUser} increaseItem={increaseItem} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} saveCart={saveCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
export default MyApp

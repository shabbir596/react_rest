/* eslint-disable no-unused-vars */
import './App.css';
import React,{createContext, useEffect, useState} from 'react'
import Isotope from 'isotope-layout';
import Topnav from './Components/Topnav.js'
import Toolbar from './Components/Toolbar.js'
import Menulist from './Components/Menulist.js'
import Menu_data from './Components/MenuApi.js';
import Order from './Components/Order.js'
import OrderHistory from './Components/OrderHistory.js'
import AboutUs from './Components/AboutUs.js'
import ContactUs from './Components/ContactUs.js'
import Protected from './Components/Protected.js'
import LogIn from './Components/LogIn.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const MainData = createContext(); 



function App() {
  let initialCartData = []
  let initialmenuData = Menu_data
  let initialtotalPrice = 0

  //! create localstorage if not created
  if (!localStorage.getItem('menuData')){
    localStorage.setItem('menuData',JSON.stringify(Menu_data))
  }else{
    initialmenuData = JSON.parse(localStorage.getItem('menuData'))
  }

  //! create localstorage if not created
  if (!localStorage.getItem('cartData')){
    localStorage.setItem('cartData',JSON.stringify([]))
  }else{
    initialCartData = JSON.parse(localStorage.getItem('cartData'))
  }

  //! create localstorage if not created
  if (!localStorage.getItem('totalPrice')){
    localStorage.setItem('totalPrice',JSON.stringify(0))
  }else{
    initialtotalPrice = JSON.parse(localStorage.getItem('totalPrice'))
  }

  //? Use state & use effect for Cart
  const [cart, setCart] = useState(initialCartData)
  useEffect(() => {
    localStorage.setItem('cartData',JSON.stringify(cart))
  }, [cart])

  //? Use state & use effect for Menu data
  const [menuData, setMenuData] = useState(initialmenuData)
  useEffect(() => {
    localStorage.setItem('menuData',JSON.stringify(menuData))
  },[menuData])

  //? Use state for Total price & taxRate
  const [totalPrice, setTotalPrice] = useState(initialtotalPrice)
  useEffect(() => {
    localStorage.setItem('totalPrice',JSON.stringify(totalPrice))
  },[totalPrice])
  const [taxRate] = useState({'cgst':5, 'sgst':5})

  //! refreshMasonry function
  const refreshMasonry = () => {
    let grid = document.querySelector('.grid')
        let masonry= new Isotope(grid, {
        itemSelector: '.grid-item',
        columnWidth: 10
      });
  }

  //! AddToCart Function
  const addToAoCart = (mainId,itemId) => {

    mainId = parseInt(mainId)
    itemId = parseInt(itemId)
    let newMenuData = [...menuData]
    newMenuData[mainId].aitem[itemId].quantity = 1
    newMenuData[mainId].aitem[itemId].classlist = 'item_expand active'
    setMenuData(newMenuData)
    
    let newCart = [...cart]
    newCart.push(`${mainId}_${itemId}`)
    setCart(newCart)
    console.log(newCart)

    let newtotalPrice = totalPrice
    newtotalPrice+=(menuData[mainId].aitem[itemId].quantity * menuData[mainId].aitem[itemId].price)
    setTotalPrice(newtotalPrice)
    if (newCart.length === 1){
      setTimeout(()=>{
        refreshMasonry()
      },500)
    }
    
  }

  //! incQuantity Function
  const incQuantity = (mainId,itemId) => {
    let newMenuData = [...menuData]
    newMenuData[mainId].aitem[itemId].quantity += 1
    setMenuData(newMenuData)

    let newtotalPrice = totalPrice
    newtotalPrice+=(menuData[mainId].aitem[itemId].price)
    setTotalPrice(newtotalPrice)
  }

  //! decQuantity Function
  const decQuantity = (mainId,itemId) => {
    let newMenuData = [...menuData]
    if (newMenuData[mainId].aitem[itemId].quantity-1 === 0){
        newMenuData[mainId].aitem[itemId].quantity = 1
        newMenuData[mainId].aitem[itemId].classlist = 'active'

        let newCart = [...cart]
        newCart.splice(newCart.indexOf(`${mainId}_${itemId}`),1)

        setCart(newCart)
        setMenuData(newMenuData)
        refreshMasonry()
    }else{
      newMenuData[mainId].aitem[itemId].quantity-=1
      setMenuData(newMenuData)
    }

    let newtotalPrice = totalPrice
    newtotalPrice-=(menuData[mainId].aitem[itemId].price)
    setTotalPrice(newtotalPrice)
  }

  //! deleteCartItem Function
  const deleteCartItem = (index) => {
    let newCart = [...cart]
    let [mainId,itemId] = newCart[index].split('_')
    mainId=parseInt(mainId)
    itemId=parseInt(itemId)

    let newtotalPrice = totalPrice
    console.log((menuData[mainId].aitem[itemId].price) * (menuData[mainId].aitem[itemId].quantity),newtotalPrice)
    newtotalPrice-=((menuData[mainId].aitem[itemId].price) * (menuData[mainId].aitem[itemId].quantity))
    setTotalPrice(newtotalPrice)

    newCart.splice(index,1)
    setCart(newCart)

    let newMenuData = [...menuData]
    newMenuData[mainId].aitem[itemId].quantity = 1
    newMenuData[mainId].aitem[itemId].classlist = 'active'
    setMenuData(newMenuData)
    
    // console.log('refresh masonry',newCart.length)
    if (newCart.length === 0){
      console.log('refresh masonry')
      setTimeout(()=>{
        refreshMasonry()
      },500)
    } 
  }
  
  return (
    <main id='MainBody' className={cart.length > 0? window.innerWidth > 949 ? 'offcanvas-menu-cart hasCart':'hasCart':''}>
      {/* preloader */}
      <div id="preloader"></div>
      {/* ./preloader */}

      <MainData.Provider value={{'menuData':menuData,'addToCart': addToAoCart, 'cart':cart, 'totalPrice':totalPrice,'taxRate':taxRate,'incQuantity':incQuantity,'decQuantity':decQuantity,'deleteCartItem':deleteCartItem}}>
        <BrowserRouter >{/* basename='/build' */}
          <Routes>
            <Route exact path="/" element={<Protected Component={HOME} Topnav={Topnav} />}/>
            <Route path="/order" element={<Protected Component={Order} Topnav={Topnav} />} />
            <Route path="/orderhistory" element={<Protected Component={OrderHistory} Topnav={Topnav} />} />
            <Route path="/contactus" element={<><Topnav/> <ContactUs/></>}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/aboutus" element={<> <Topnav/> <AboutUs/> </> } />
          </Routes>
        </BrowserRouter>
      </MainData.Provider>
    </main>
  );
}

function HOME() {
  return (
    <section className="container-fluid w-100  main"  id='main-container' >
      <div className="container p-0">
        <Toolbar/>
        <Menulist/>
      </div>
    </section>
  )
}


export default App;
export {MainData};




import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import SubNavbar from './Components/Navbar/SubNavbar'
import Plants from './Components/Plants/Plants'

const plantsPromise = fetch('Plant.json').then(res => res.json())

function App() {
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0)
  const handleAddCart = (setShowConfirmButtons) => {


    setShowConfirmButtons(true)

  }
  const handleCancel = (setShowConfirmButtons) => {
    setShowConfirmButtons(false)
  }

  const handleConfirm = (plant, setShowConfirmButtons) => {
    const newCarts = [...carts, plant]
    setCarts(newCarts)
    setSubTotal(subTotal + plant.price);
    setShowConfirmButtons(false)
  }

  const removeCartFromShowCart = (plant) => {
    const remainingCart = carts.filter(cart=>cart.id !== plant.id)
    setCarts(remainingCart)
    setSubTotal(subTotal - plant.price);
  }
  return (
    <>
      <Navbar
        carts={carts}
        subTotal={subTotal}
        removeCartFromShowCart={removeCartFromShowCart}
      ></Navbar>
      <SubNavbar></SubNavbar>
      <Banner></Banner>
      <Plants
        handleConfirm={handleConfirm}
        handleAddCart={handleAddCart}
        handleCancel={handleCancel}
        plantsPromise={plantsPromise}></Plants>
    </>
  )
}

export default App

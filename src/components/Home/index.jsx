import React from "react";
import styles from './styles.module.scss'
import Cart from  '../Cart';
import Products from '../Products'
import  {CartProvider} from "../../Context/CartContext";
import Navbar from "../Navbar/navbar"
const Home = () => { 

  return (
    <CartProvider>
    <div className={styles.home}>
    <Navbar/>
    <h2 className={styles.h2}>Elige lo que mas desees!</h2>
    <h1></h1>
        <Cart />
        <Products />
    </div>
    </CartProvider>
  )
}

export default Home;
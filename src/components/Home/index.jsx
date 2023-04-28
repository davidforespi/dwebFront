import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'
import Cart from  '../Cart';
import Products from '../Products'
import { CartProvider } from "../../Context/CartContext";
import axios from 'axios'
import { useNavigate, useParams} from "react-router-dom";

const Home = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const {id} = useParams();

 useEffect(() =>{
  axios.get(`http://localhost:5000/api/user/${id}`)
  .then(({data}) => setName(data.nombre))
  .catch((error) => console.error(error));
  
 }, [id]);
  
  return (
    <CartProvider>
    <div className={styles.home}>
        <Cart />
        <Products />
    </div>
    </CartProvider>
  )
}

export default Home
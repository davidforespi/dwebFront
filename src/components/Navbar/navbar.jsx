import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Navbar = () => {

  const navigate = useNavigate();
  const [name, setName] = useState();

  const {id}  = useParams();

 


  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
      .then(({ data }) => setName(data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)))
      .catch((error) => console.error(error));
  }, [id]);



  return (
    <nav className={styles.navbar}>
      <div>
        <p className={styles.p}>Bienvenido {name}</p>
      </div>
      <NavLink className={styles.navtitle} to={`/menu/${id}`}>
        <div>
          <span>Menu</span>
        </div>
      </NavLink>
      <button className={styles.aboutus} onClick={() => navigate(`/aboutus/${id}`)}>About us</button>
      <button className={styles.edit} onClick={() => navigate(`/editprofile/${id}`)}>Actualiza tu perfil</button>
      <button className={styles.logout} onClick={() => navigate('/')}>
        Log out
      </button>
    </nav>
  );
};

export default Navbar;

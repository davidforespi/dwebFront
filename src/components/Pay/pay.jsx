import React, { useState, useEffect} from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import axios from 'axios';

const Pay = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get('total');
  const [mensaje, setMensaje] = useState('');
  const { id } = useParams();
  const [name, setName] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const navigate = useNavigate();


  const obtenerFecha = () => {
    const date = new Date();
    const dates = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return `${dates} ${time}`;
  }

  useEffect(() => {
    const finalDate = setInterval(() => {
      const date = obtenerFecha();
      setCurrentDate(date);
    }, 500);

    return () => {
      clearInterval(finalDate);
    };
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
      .then(({ data }) => setName(data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)))
      .catch((error) => console.error(error));
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const fPrice = {
      price,
    };
  
    try {
      await axios.post(`http://localhost:5000/api/pay/${id}`, fPrice);
      await axios.delete(`http://localhost:5000/api/pay-delete/${id}`);
      await axios.delete("http://localhost:5000/api/products-emptyCart");
      setMensaje(
        'Gracias por comprar en tu restaurante favorito, enviamos un correo con la generación de tu factura y luego la confirmación de tu compra.'
      );
  
      setTimeout(() => {
        navigate(`/menu/${id}`);
      }, 3000); // Redirige después de 3 segundos (3000 ms)
    } catch (error) {
      console.error(error);
      setMensaje('Error al procesar el pago. Inténtalo de nuevo más tarde.');
    }
  };

  


  return (
    <div className={styles.payContainer}>
      <form onSubmit={handleSubmit}>
      <h1 className={styles.payTitle}>Factura</h1>
      <div className={styles.factura}>
        <div className={styles.facturaItem}>
          <span className={styles.facturaLabel}>ID de Usuario:</span>
          <span className={styles.facturaValue}>{id}</span>
        </div>
        <div className={styles.facturaItem}>
          <span className={styles.facturaLabel}>Nombre: </span>
          <span className={styles.facturaValue}>{name}</span>
        </div>
        <div className={styles.facturaItem}>
          <span className={styles.facturaLabel}>Fecha: </span>
          <span className={styles.facturaValue}>{currentDate}</span>
        </div>
        <div className={styles.facturaItem}>
          <span className={styles.facturaLabel}>Precio Total:</span>
          <span className={styles.facturaValue}>${price}</span>
        </div>
      </div>
      <button className={styles.payButton} type="submit">Pagar</button>
      </form>
      <div className={styles.payMessage}>{mensaje}</div>
    </div>
  );
};

export default Pay;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProfile = () => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContrasenia] = useState('');
  const [contraseñaConf, setContraseniaConf] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleContraseniaChange = (e) => {
    setContrasenia(e.target.value);
  };

  const handleContraseniaConfChange = (e) => {
    setContraseniaConf(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editUser = {
      nombre,
      contraseña,
      contraseñaConf,
    };

    if (nombre !== "" && contraseña !== "" && contraseñaConf !== "") {
      if(contraseña === contraseñaConf){
        await axios.put(`http://localhost:5000/api/editprofile/${id}`, editUser)
        .then(() => {
          setMensaje('Información actualizada con éxito');
          navigate(`/menu/${id}`);
        })
        .catch((error) => {
          console.error(error);
          setMensaje('Hubo un error al actualizar la información');
        });
      }else{
        setMensaje("Las contraseñas no coinciden");
      }
    } else {
      setMensaje('Por favor, complete todos los campos');
    }

  };

  return (
    <div className="container">
      <main>
        <h1>Edit your Information</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={handleNombreChange} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={contraseña} onChange={handleContraseniaChange} />
          </label>
          <label>
            Confirmar Contraseña:
            <input type="password" value={contraseñaConf} onChange={handleContraseniaConfChange} />
          </label>
          <button type="submit">Actualizar</button> <button type="button" onClick={() => navigate(`/menu/${id}`)}>Regresar</button>
        </form>
        <p>{mensaje}</p>
      </main>
    </div>
  );
}

export default EditProfile;

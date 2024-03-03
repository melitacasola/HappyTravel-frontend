"use client"
import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';


const Login_User = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setLoading(true);
  
      axios.post('/api/login', {
        email,
        password,
      })
        .then((response) => {
          // Manejar la respuesta exitosa
          console.log(response);
        })
        .catch((error) => {
          // Manejar el error de la solicitud
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    return (
      <div className={styles.login_form}>
        {loading && <div>Cargando...</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    );
  };
  
  export default Login_User;
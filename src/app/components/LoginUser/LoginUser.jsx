"use client"
import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import { useRouter } from 'next/navigation'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";


const LoginUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/login', {
      email,
      password,
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      setErrorMessage('Login failed. Please check your email and password.')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
<section className=" h-screen w-full flex justify-center items-center">
  <div className="border-8 rounded-3xl border-bg-color px-8 py-4">
    <h3 className='text-red-500 font-semibold text-xl text-center mb-4'>Acceso de usuario</h3>
    <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
      <label className='text-blue-850 font-semibold text-xl mb-1'>E-Mail</label>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        validationMessage="Debes escrir un e-mail"
        
      />

      <label className='text-blue-850 font-semibold text-xl mb-1'>Contraseña</label>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='flex flex-row place-content-evenly items-center mb-4'>
        <Button type="submit" text="Aceptar"/>
        <Button className={styles.buttonSecondary} text="Cancelar" onClick={() => router.push('../../layout.js')} />
      </div>
    </form>
  </div>
</section>
  )
}

export default LoginUser


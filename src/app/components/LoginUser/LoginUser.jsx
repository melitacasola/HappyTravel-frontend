"use client"

import { useState } from 'react'

import { loginUser } from '@/app/services/axios';
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../../../contexts/authContext';
import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"
import styles from './style.module.css'


const LoginUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const { login } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const data = { email, password };

    loginUser(data).then((response) => {

      login(response.data.access_token)
      router.push('/');
      router.refresh()

    })

      .catch((error) => {
        console.error('Login failed:', error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });


  }

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="border-8 rounded-3xl border-bg-color px-8 py-4">
        <h3 className="text-[#FF0060] font-semibold text-xl text-center mb-1">Acceso de Usuario</h3>
        <hr className='border-1 border-[#FF0060]' />
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <label className="text-blue-850 font-semibold text-xl mb-1">Email</label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // validationMessage="Please enter a valid email"
            isRequired
          />

          <label className='text-blue-850 font-semibold text-xl mb-1'>Password</label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-normal"
            // validationMessage="Please enter a valid password"
            isRequired
          />
          {errorMessage && <p className='text-[#FF0060] text-xl'>{errorMessage}</p>}
          <div className='flex flex-row place-content-evenly items-center mb-4'>

            <button className='bg-primary text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl font-semibold hover:bg-opacity-80 transition-colors duration-300 flex' type="submit">Aceptar</button>
            <Button className={styles.buttonSecondary} text="Cancelar" onClick={() => router.push('../../layout.js')} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginUser
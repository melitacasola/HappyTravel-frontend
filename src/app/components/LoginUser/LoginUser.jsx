"use client"
import React, { useState } from 'react'
import axios from '../../../../services/axios';
import styles from './style.module.css'
import { useRouter } from 'next/navigation'
import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"

const LoginUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {    //handleSubmit envia la info
    e.preventDefault()
    setLoading(true)

    axios.post('/api/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
       
        router.push('/details/2')
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Email or password is incorrect')
      } else {
        setErrorMessage('An error occurred. Please try again later.')
      }
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="border-8 rounded-3xl border-bg-color px-8 py-4">
        <h3 className='text-red-500 font-semibold text-xl text-center mb-4'>User Access</h3>
        <hr/>
        <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
          <label className='text-blue-850 font-semibold text-xl mb-1'>Email</label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validationMessage="Please enter a valid email"
            isRequired
          />

          <label className='text-blue-850 font-semibold text-xl mb-1'>Password</label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            validationMessage="Please enter a valid password"
            isRequired
          />
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          <div className='flex flex-row place-content-evenly items-center mb-4'>
            <Button type="submit" text="Accept" isLoading={loading} />
            <Button className={styles.buttonSecondary} text="Cancel" onClick={() => router.push('../../layout.js')} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginUser



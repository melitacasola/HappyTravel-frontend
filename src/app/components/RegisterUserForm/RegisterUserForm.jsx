"use client";

import React, { useState } from "react";
import { useFetchApi } from "../../services/useFetchApi";
import axios from "../../services/axios";

import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import Link from "next/link";

const Form = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { data, loading, error } = useFetchApi("http://localhost:8000/api/register", "POST", register);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(register);
  };

  /*  */
  const registerWrapper = `border-4 rounded-3xl border-bg-color px-8 py-4 mx-auto my-20 max-w-sm`;
  const titleRegister = `text-2xl text-center text-secondary border-b border-secondary pb-2 mb-8`;
  const formWrapper = `flex flex-col gap-1 items-center`;
  const labelStyle = `text-text-color text-xl`;
  const buttonsWrapper = `flex flex-row place-content-evenly items-center mb-4`;
  const textStyle = `text-text-color text-xl text-center`;
  const linkStyle = `text-primary text-xl`;

  return (
    <section className={registerWrapper}>
      <h3 className={titleRegister}>Registro de usuario</h3>
      <form className={formWrapper}>
        <label className={labelStyle}>Nombre</label>
        <Input
          type="text"
          name="name"
          placeholder="Escribe tu nombre ..."
          pattern="[A-Za-z ]+"
          validationMessage="Nombre requerido"
          required
          onChange={handleChange}
        />
        <label className={labelStyle}>E-mail</label>
        <Input
          type="email"
          name="email"
          placeholder="Escribe tu e-mail ..."
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
          onChange={handleChange}
        />
        <label className={labelStyle}>Contraseña</label>
        <Input
          type="password"
          name="password"
          placeholder="Escribe tu contraseña ..."
          required
          onChange={handleChange}
        />
        <div className={buttonsWrapper}>
          <Button type="submit" text="Aceptar" isPrimary={true} />
          <Button text="Cancelar" isPrimary={false} />
        </div>
      </form>
      <p className={textStyle}>
        ¿Ya tienes cuenta? Accede{" "}
        <Link href="#" className={linkStyle}>
          aquí
        </Link>
      </p>
    </section>
  );
};

export default Form;

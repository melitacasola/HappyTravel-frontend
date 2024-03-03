"use client";

import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import Link from "next/link";

const Form = () => {
  const registerWrapper = `border-4 rounded-3xl border-bg-color px-8 py-4`;

  const titleRegister = `text-2xl text-center text-secondary border-b border-secondary pb-2 mb-8`;

  const formWrapper = `flex flex-col gap-1`;

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
          placeholder="Escribe tu nombre ..."
          pattern="[A-Za-z ]+"
          validationMessage="Nombre requerido"
          required
        />
        <label className={labelStyle}>E-mail</label>
        <Input
          type="email"
          placeholder="Escribe tu e-mail ..."
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
        <label className={labelStyle}>Contraseña</label>
        <Input type="password" placeholder="Escribe tu contraseña ..." required />
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

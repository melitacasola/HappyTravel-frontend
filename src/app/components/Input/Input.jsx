"use client";

const Input = ({ type, value, placeholder, validationMessage }) => {
  const inputWrapper = `flex flex-col h-16`;

  const inputStyle = `placeholder-text-color sm:px-6 sm:py-2 rounded-full text-xl shadow-[inset_0px_4px_4px_#00000040] transition-colors duration-300 bg-bg-color font-normal focus:border-text-color`;

  const validationStyle = `text-secondary font-normal text-base mt-1`;

  return (
    <div className={inputWrapper}>
      <input type={type} value={value} placeholder={placeholder} className={inputStyle} />
      {validationMessage && <p className={validationStyle}>{validationMessage}</p>}
    </div>
  );
};

export default Input;

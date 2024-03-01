"use client";

const Button = ({ to, text, isPrimary }) => {
  const buttonStyle = `${
    isPrimary ? "bg-primary" : "bg-secondary"
  } text-bg-color sm:px-8 sm:py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300`;

  return (
    <button>
      <a href={to} target="_blank" className={buttonStyle}>
        {text}
      </a>
    </button>
  );
};

export default Button;

"use client";

const Button = ({ to, text, isPrimary }) => {
  const buttonStyle = `${
    isPrimary ? "bg-primary" : "bg-secondary"
  } text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex`;

  return (
    <button>
      <a href={to} className={buttonStyle}>
        {text}
      </a>
    </button>
  );
};

export default Button;

import { Link } from "react-router-dom";

export default function Button({
  children,
  onClick,
  type = "primary",
  href,
  disabled = false,
}) {
  const baseStyles =
    "inline-block font-semibold rounded-md transition-colors ease-in-out";

  const variants = {
    primary:
      "py-3 px-6 shadow-[2px_2px_4px_rgba(0,0,0,0.15)] bg-accentTerracotta text-white hover:bg-teal hover:shadow-[3px_3px_6px_rgba(0,0,0,0.2)] hover:scale-105 duration-700",
    secondary:
      "py-3 px-6 border border-accentTerracotta text-accentTerracotta hover:bg-accentTerracotta hover:text-white",
    modal:
      "mt-6 px-4 py-2 bg-accentTerracotta text-white rounded hover:bg-teal",
    submit:
      "py-3 px-6 bg-accentTerracotta text-white font-semibold rounded-md shadow-md transition-transform duration-300 hover:bg-teal hover:shadow-lg",
  };

  if (href && href.startsWith("/")) {
    return (
      <Link to={href} className={`${baseStyles} ${variants[type]}`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[type]}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[type]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}

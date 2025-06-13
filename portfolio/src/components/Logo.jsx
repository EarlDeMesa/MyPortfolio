import { NavLink } from "react-router-dom";

export default function Logo({ variant = "full", className = "" }) {
  return (
    <NavLink
      to='/'
      className={`font-heading text-3xl font-bold text-accentTerracotta ${className}`}
    >
      {variant === "initial" ? "E" : "Earl.DM"}
    </NavLink>
  );
}

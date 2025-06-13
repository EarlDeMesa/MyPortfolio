import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className='bg-background shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50'>
      <Logo variant='full' />
      <ul className='flex space-x-8 text-primaryText font-medium'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "text-accentTerracotta border-b-2 border-accentTerracotta"
                : "hover:text-accentSage"
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? "text-accentTerracotta border-b-2 border-accentTerracotta"
                : "hover:text-accentSage"
            }
            end
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? "text-accentTerracotta border-b-2 border-accentTerracotta"
                : "hover:text-accentSage"
            }
            end
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? "text-accentTerracotta border-b-2 border-accentTerracotta"
                : "hover:text-accentSage"
            }
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

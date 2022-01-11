import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
   return (
      <div className="fixed flex items-center justify-center w-screen border-b-2 bg-white/50">
         <ul className="flex justify-between px-6 py-6 font-medium w-96 ">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/learn">Learn</NavLink>
            </li>
            <li>
               <NavLink to="/about">About</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
      </div>
   );
}

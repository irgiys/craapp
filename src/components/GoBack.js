import React from "react";
import { NavLink } from "react-router-dom";
export default function GoBack() {
   return (
      <NavLink
         className="absolute px-5 py-3 font-semibold text-white duration-300 shadow-xl bottom-8 hover:bg-rose-600 focus:ring focus:outline-none focus:ring-pink-200 shadow-rose-600/50 left-8 rounded-xl bg-rose-500"
         to="/learn"
      >
         <span className="absolute text-2xl font-bold rotate-180 top-3.5  left-1">
            &rarr;
         </span>
         <span className="mx-2">Back</span>
      </NavLink>
   );
}

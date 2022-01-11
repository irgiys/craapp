import React from "react";
import { NavLink } from "react-router-dom";
export default function Learn() {
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl from-fuchsia-200 to-yellow-300">
         <div className="inline-block bg-gradient-to-tr from-sky-500 to-rose-500 bg-clip-text">
            <h1 className="my-4 text-5xl font-black text-transparent uppercase">
               Learn
            </h1>
         </div>
         <div className="learn-wrapper">
            <div className="learn-button">
               <NavLink to="/learn/message">Message Card</NavLink>
            </div>
            <div className="learn-button">
               <NavLink to="/learn/card">Komponen pertama</NavLink>
            </div>
         </div>
         <div className="learn-wrapper">
            <div className="learn-button">
               <NavLink to="/learn/redundant">Redundant Component</NavLink>
            </div>
            <div className="learn-button">
               <NavLink to="/learn/login">Login Page</NavLink>
            </div>
         </div>
         <div className="learn-wrapper">
            <div className="learn-button">
               <NavLink to="/learn/register">Register Component</NavLink>
            </div>
            <div className="learn-button">
               <NavLink to="/learn/grid">Griddd</NavLink>
            </div>
         </div>
      </div>
   );
}

import React from "react";
export default function Button({ className, children, ...props }) {
   return (
      <button
         {...props}
         className={`${
            className ? className : ""
         } bg-indigo-500 hover:bg-indigo-600 shadow-lg px-5 py-3 font-semibold  duration-300 rounded-lg focus:ring focus:ring-indigo-400 `}
      >
         {children}
      </button>
   );
}

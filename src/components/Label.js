import React from "react";
export default function Label({ forInput, children }) {
   return (
      <label htmlFor={forInput} className="block mb-3 text-lg capitalize">
         {children}
      </label>
   );
}

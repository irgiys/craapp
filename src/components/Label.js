import React from "react";
export default function Label({ forInput, children }) {
   return (
      <label
         htmlFor={forInput}
         className="block mb-3 text-base capitalize sm:text-lg"
      >
         {children}
      </label>
   );
}

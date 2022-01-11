import React from "react";
export default function Checkbox({ forInput, label }) {
   return (
      <div className="flex items-center">
         <input
            type="checkbox"
            id={forInput}
            className="text-indigo-400 rounded-sm focus:ring-2 focus:ring-indigo-300"
         />
         <label htmlFor={forInput} className="px-2 cursor-pointer select-none">
            {label}
         </label>
      </div>
   );
}

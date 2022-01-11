import React from "react";
export default function Input({ type = "text", ...props }) {
   return (
      <input
         type={type}
         {...props}
         className="w-full mb-4 border-gray-200 rounded-lg focus:border-indigo-200 focus:ring-indigo-400 focus:ring-4"
      />
   );
}

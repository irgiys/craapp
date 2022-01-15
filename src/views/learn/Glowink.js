import React from "react";
export default function Glowink() {
   return (
      <div className="flex items-center justify-center h-screen bg-black">
         <div className="relative group">
            <div className="absolute animate-tilt -inset-0.5 group-hover:opacity-100 opacity-75 transition duration-1000 group-hover:duration-200 rounded-md bg-gradient-to-r from-indigo-900 to-fuchsia-700 blur-sm"></div>
            <button className="relative grid justify-center grid-flow-col py-4 bg-black divide-x-2 divide-indigo-900 rounded-md px-7 ">
               <div className="pr-3.5 space-x-2">
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:rotate-0 transition duration- h-6 w-6 inline rotate-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                     </svg>
                  </span>
                  <span className="text-gray-300">Release 2022.03</span>
               </div>
               <div className="pl-3 space-x-1 text-indigo-600 group-hover:text-indigo-400 ">
                  <span className="transition duration-300 ">
                     See what is that
                  </span>
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 inline group-hover:translate-x-1 transition duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                           clip-rule="evenodd"
                        />
                     </svg>
                  </span>
               </div>
            </button>
         </div>
      </div>
   );
}

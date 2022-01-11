import React from "react";
export default function Grid() {
   return (
      <div className="grid h-screen place-items-center">
         <div className="grid gap-4 p-4 xs:max-w-5xl xs:grid-cols-2 xs:p-8 md:grid-cols-4">
            <h1 className="text-5xl font-bold xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 md:col-span-2 md:grid-cols-2">
               <span className="md:col-span-2">
                  Grid layout With Tailwind CSS
               </span>
            </h1>
            <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
               Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum
               dolor sit amet consectetur.
            </p>
            <div className="h-16 bg-blue-400 xs:h-auto xs:square "></div>
            <div className="h-16 bg-pink-400 xs:h-auto xs:square "></div>
            <div className="h-16 bg-blue-400 xs:h-auto xs:square "></div>
            <div className="h-16 bg-pink-400 xs:h-auto xs:square md:col-start-2">
               2
            </div>
            <div className="h-16 bg-blue-400 xs:h-auto xs:square "></div>
            <div className="h-16 bg-pink-400 xs:h-auto xs:square md:row-start-3"></div>
            <div className="h-16 bg-blue-400 xs:h-auto xs:square "></div>
            <div className="h-16 bg-blue-400 xs:h-auto xs:square "></div>
            <p className="self-center md:text-lg md:row-span-2 md:col-span-2 md:row-start-4 md:col-start-3 ">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Mollitia, facilis.
            </p>
         </div>
      </div>
   );
}

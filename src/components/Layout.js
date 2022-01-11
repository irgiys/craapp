import React from "react";
export default function Layout({ children }) {
   return (
      <div className="flex items-center justify-center h-screen antialiased tracking-tighter bg-gradient-to-br from-teal-400 to-orange-400">
         {children}
      </div>
   );
}

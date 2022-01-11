import React from "react";
import GoBack from "../../components/GoBack";
import Layout from "../../components/Layout";
export default function CardMessage() {
   return (
      <>
         <Layout>
            <div className="flex items-center max-w-screen-md p-6 mx-auto space-x-5 bg-white shadow-lg rounded-xl">
               <div className="w-12 h-12 transition-all rounded-full bg-gradient-to-tr from-teal-500 to-yellow-400 animate-spin"></div>
               <div className="selection:bg-teal-200 selection:text-gray-600">
                  <div className="inline-block text-2xl font-bold text-transparent uppercase bg-clip-text bg-gradient-to-bl from-blue-500 to-red-500">
                     ciao
                  </div>
                  <p className="text-gray-700 text-m">You have a new message</p>
               </div>
            </div>
            <GoBack />
         </Layout>
      </>
   );
}

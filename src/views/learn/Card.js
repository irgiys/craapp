import React from "react";
import GoBack from "../../components/GoBack";
import Layout from "../../components/Layout";
export default function Card() {
   return (
      <Layout>
         <div className="max-w-xl">
            <div className="overflow-hidden bg-white rounded-lg shadow">
               <header className="flex items-center justify-between px-4 py-4 border-2 bg-gray-200/50 border-b-gray-400/40">
                  <div>
                     <h1 className="text-lg font-medium">Card Title</h1>
                     <h1 className="text-gray-500">
                        Lorem ipsum dolor sit amet.
                     </h1>
                  </div>
                  <a
                     href="https://facebook.com"
                     target="_blank"
                     rel="noreferrer"
                     className="px-4 py-2 text-sm text-gray-700 duration-300 rounded-lg bg-cyan-300 focus:outline-none focus:ring focus:ring-pink-300 hover:text-gray-900 hover:bg-cyan-500"
                  >
                     Login
                  </a>
               </header>
               <section className="px-4 py-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti quibusdam laborum sequi.
               </section>
               <footer className="px-4 py-4 text-gray-500 bg-gray-100 border-2 border-t-gray-40/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
               </footer>
            </div>
         </div>
         <GoBack />
      </Layout>
   );
}

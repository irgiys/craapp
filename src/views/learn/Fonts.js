import React from "react";
import Layout from "../../components/Layout";
export default function Fonts() {
   return (
      <Layout>
         <article className="max-w-sm">
            <div className="inline-block duration-300 bg-emerald-800 bg-clip-text animate-raindbow hover:animate-bounce">
               <h1 className="text-2xl font-black text-transparent uppercase font-Rampart">
                  This is costum fonts
               </h1>
            </div>
            <br />
            <p className="inline px-10 text-2xl font-bold leading-relaxed text-gray-300 font-Nautigal box-decoration-slice bg-gradient-to-r from-cyan-800 to-transparent">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
               tenetur esse quibusdam et rem sint, ut facere labore eum ab!
               Tenetur labore, cupiditate commodi necessitatibus eligendi
               tempore expedita repudiandae hic!
            </p>
         </article>
      </Layout>
   );
}

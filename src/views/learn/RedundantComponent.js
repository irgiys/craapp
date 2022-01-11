import React from "react";
import Button from "../../components/Button";
import GoBack from "../../components/GoBack";
import Layout from "../../components/Layout";
export default function RedundantComponent() {
   return (
      <Layout>
         <div className="learn-wrapper">
            <button onClick={() => alert("heee")} className="btn btn-primary">
               Apply
            </button>
            <button className="btn btn-secondary">Secondary</button>
            <Button onClick={() => alert("hello")}>Component</Button>
            <Button className="text-white shadow-lg bg-rose-500 hover:bg-rose-600 shadow-rose-500/40">
               Secondary
            </Button>
            <Button className="text-transparent bg-gradient-to-tr from-teal-600 to-green-500 shadow-cyan-800">
               <div className="text-2xl font-extrabold uppercase bg-gradient-to-tr bg-clip-text from-sky-900 to-red-900">
                  Wwowo
               </div>
            </Button>
         </div>
         <GoBack />
      </Layout>
   );
}

import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import Layout from "../../components/Layout";
export default function SwitchTog() {
   const [toggle, setToggle] = useState(false);
   return (
      <Layout>
         <Switch.Group>
            <div className="flex items-center max-w-md px-4 py-5 bg-white rounded-md gap-9">
               <div className="tracking-tighter">
                  <Switch.Label
                     as="h1"
                     className="text-xl font-semibold text-gray-800"
                     passive
                  >
                     Auto Download
                  </Switch.Label>
                  <Switch.Description as="p" className="text-gray-600">
                     Auto renew this domain before expires
                  </Switch.Description>
               </div>
               <div>
                  <Switch
                     checked={toggle}
                     onChange={setToggle}
                     className={`w-11 h-6 cursor-pointer  rounded-3xl relative inline-flex items-center duration-1000 focus:ring-2 focus:ring-offset-2 focus:outline-none border-2 border-transparent focus:ring-blue-500 ${
                        toggle ? "bg-emerald-300" : "bg-gray-200"
                     }`}
                  >
                     <span
                        className={`w-4 h-4 rounded-full duration-300 ease-in ${
                           toggle
                              ? "translate-x-6 bg-cyan-800"
                              : " translate-x-0 bg-rose-800"
                        }`}
                     ></span>
                  </Switch>
               </div>
            </div>
         </Switch.Group>
      </Layout>
   );
}

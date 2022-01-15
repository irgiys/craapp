import React, { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import GoBack from "../../components/GoBack";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
export default function Login() {
   const [passwordShown, setPasswordShown] = useState(false);
   const showPassword = () => {
      setPasswordShown((e) => !e);
   };
   return (
      <Layout>
         <div className="overflow-hidden bg-white rounded-lg  sm:w-96">
            <h1 className="px-4 py-3 text-base uppercase bg-gray-100 border-b-2 border-gray-300 sm:text-2xl">
               halo
            </h1>
            <div className="w-full px-4 py-4 ">
               <Label forInput="email">email</Label>
               <Input id="email" placeholder="John@gmail.com" />
               <div className="flex justify-between">
                  <Label forInput="password">password</Label>
                  <p onClick={showPassword} className="select-none">
                     {passwordShown ? "👀" : "👁"}{" "}
                  </p>
               </div>
               <Input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  placeholder="Password heere"
               />

               <div className="flex justify-between pt-5 pb-2 text-sm sm:text-base ">
                  <Checkbox label={"Remember me"} forInput="remember" />
                  <h1>Forgot Password</h1>
               </div>
               <Button className="w-full py-4 my-4 text-gray-100">Login</Button>
            </div>
         </div>
         <GoBack />
      </Layout>
   );
}

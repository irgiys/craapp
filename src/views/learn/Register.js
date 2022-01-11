import React, { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import GoBack from "../../components/GoBack";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
export default function Register() {
   const [passwordShown, setPasswordShown] = useState(false);
   const showPassword = () => {
      setPasswordShown((e) => !e);
   };
   return (
      <Layout>
         <div className="overflow-hidden bg-white rounded-lg w-2/2 md:w-1/2">
            <h1 className="px-4 py-3 text-2xl uppercase bg-gray-100 border-b-2 border-gray-300">
               register
            </h1>
            <div className="w-full px-4 py-4 ">
               <Label forInput="name">Name</Label>
               <Input id="name" placeholder="John DOe" />
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
               <Label forInput="confirm-password">confirm password</Label>
               <Input
                  type={passwordShown ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm Password heere"
               />
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <Label forInput="gender">Gender</Label>
                     <select
                        name="gender"
                        id="gender"
                        className="w-full rounded-lg focus:ring focus:ring-indigo-400"
                     >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                     </select>
                  </div>
                  <div>
                     <Label forInput="status">Status</Label>
                     <select
                        name="status"
                        id="status"
                        className="w-full rounded-lg focus:ring focus:ring-indigo-400"
                     >
                        <option value="student">Student</option>
                        <option value="employee">employee</option>
                     </select>
                  </div>
               </div>
               <div className="flex justify-between mt-8">
                  <Checkbox label="Agree Term and Condition" forInput="agree" />
                  <h1>Login</h1>
               </div>
               <Button className="w-full py-4 my-4 text-gray-100">Login</Button>
            </div>
         </div>
         <GoBack />
      </Layout>
   );
}

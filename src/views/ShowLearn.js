import React from "react";
import { useParams } from "react-router-dom";
import Card from "./learn/Card";
import CardMessage from "./learn/CardMessage";
import Fonts from "./learn/Fonts";
import Glowink from "./learn/Glowink";
import Grid from "./learn/Grid";
import Login from "./learn/Login";
import RedundantComponent from "./learn/RedundantComponent";
import Register from "./learn/Register";
import SwitchTog from "./learn/SwitchTog";
export default function ShowLearn() {
   const { slug } = useParams();
   if (slug === "message") {
      return <CardMessage />;
   }
   if (slug === "card") {
      return <Card />;
   }
   if (slug === "redundant") {
      return <RedundantComponent />;
   }
   if (slug === "login") {
      return <Login />;
   }
   if (slug === "register") {
      return <Register />;
   }
   if (slug === "grid") {
      return <Grid />;
   }
   if (slug === "switch") {
      return <SwitchTog />;
   }
   if (slug === "glowink") {
      return <Glowink />;
   }
   if (slug === "fonts") {
      return <Fonts />;
   }
   return <div>Hello</div>;
}

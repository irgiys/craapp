import React from "react";
import { useParams } from "react-router-dom";
import Card from "./learn/Card";
import CardMessage from "./learn/CardMessage";
import Grid from "./learn/Grid";
import Login from "./learn/Login";
import RedundantComponent from "./learn/RedundantComponent";
import Register from "./learn/Register";
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
   return <div>Hello</div>;
}

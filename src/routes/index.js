import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Learn from "../views/Learn";
import NotFound from "../views/NotFound";
import ShowLearn from "../views/ShowLearn";
export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Navbar />
                     <Home />
                  </>
               }
            />
            <Route
               exact
               path="/learn"
               element={
                  <>
                     <Navbar />
                     <Learn />
                  </>
               }
            />

            <Route
               path="/learn/:slug"
               element={
                  <>
                     {/* <Navbar /> */}
                     <ShowLearn />
                  </>
               }
            />
            <Route
               path="/about"
               element={
                  <>
                     <Navbar />
                     <About />
                  </>
               }
            />
            <Route
               path="/contact"
               element={
                  <>
                     <Navbar />
                     <Contact />
                  </>
               }
            />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

import React from "react";
import Navbar from "./Navbar";
import Main_body from "./Main_body";
import Info from "./Info";
import Footer from "./Footer";

export default function App() {
  return(
    <div className="flex flex-col">
      <Navbar/>
      <Main_body/>
      <Info/>
      <Footer/>
    </div>
  )
}
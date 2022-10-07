import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";


export default function Navigation() {

  return (
    <div className="flex content-center h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
      <Navbar />
      <Home />
    </div>
  );
}

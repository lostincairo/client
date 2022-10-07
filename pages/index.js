import styles from "../styles/Home.module.css";
import React from "react";

import Meta from "../components/Meta";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";

export default function Home({}) {
  return (
    <div className="h-full w-screen flex flex-col">
      <Meta />
      <Navigation />
    </div>
  );
}

import Link from "next/link"
import { useState } from 'react'
import Home from "./Home"
import InitMap from "./GameContainer/Map"
import { InitGame } from "./Auth/Auth"


export default function Navigation() {
    
    const [showModal, setShowModal] = useState(false)

    return (
      <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
        <Home />
        <InitGame />
        </div>
    );
}
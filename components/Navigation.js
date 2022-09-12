import Link from "next/link"
import { useState } from 'react'
import LobbyModal from "./Lobby/LobbyModal";

export default function Navigation() {
    
    const [showModal, setShowModal] = useState(false)

    return (
      <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
          <h1 className="py-12 h-72 text-center align-top text-black text-6xl font-extrabold">
            Lost in Cairo
          </h1>

          <button
            className="p-10 mx-auto rounded-md bg-charcoal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setShowModal(true)}
          >
            Join Lobby
          </button>
          <LobbyModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
}
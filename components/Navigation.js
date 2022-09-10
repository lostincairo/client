import Link from "next/link"
import { useState } from 'react'
import LobbyModal from "./Lobby/LobbyModal";

export default function Navigation() {
    
    const [showModal, setShowModal] = useState(false)

    return (
      <div className="mx-auto max-w-7xl h-screen w-full p-5 flex flex-col lg:px-8">
        <div className="h-128">
          <h1 className="py-12 h-72 text-center align-top text-black text-6xl font-extrabold">
            Lost in Cairo
          </h1>

          <button
            className="p-10 ml-auto rounded-md border border-transparent bg-orange-400 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setShowModal(true)}
          >
            Join Lobby
          </button>
          <LobbyModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
    );
}
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'

import { useStarknet } from '@starknet-react/core'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent.js'
import Navigation from '../components/Navigation'

import { useSelector } from 'react-redux'
import clientPromise from "../utils/mongodb";


export default function Home() {
  const { account, connect, connectors } = useStarknet()
  const [connectMenuToggled, setConnectMenuToggled] = React.useState(false);
  const router = useRouter()

  const { inGame } = useSelector((store) => (store._game))

  return (
    <div className="h-screen w-screen flex flex-col bg-cover bg-[url('../public/background.png')]">
      <Meta />
      {events.map((event) => (
        <li>{event.data}</li>
      ))}
      { inGame ||<Header /> }
      <Navigation />
      { inGame || <FooterComponent /> }
    </div>
  )
}

// Fetch events from MongoDB
export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { events },
  };
}
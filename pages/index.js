import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'
import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import Navbar from '../components/Navbar'
import { useStarknet } from '@starknet-react/core'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import fetch from 'isomorphic-unfetch'



export default function Home({}) {
  const { account, connect, connectors } = useStarknet()
  const router = useRouter()

  const { inGame } = useSelector((store) => (store._game))


  return (
    <div className="h-full w-screen flex flex-col">
      <Meta />
      <Navigation />
    </div>
  )
}

// export async function getStaticProps(context) {
//   const res = await fetch("http://localhost:3000/api/posts");
//   const json = await res.json();
//   return {
//     props: {
//       event: json,
//     },
//   };
// }


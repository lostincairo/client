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
import { connectToDatabase } from '../utils/mongodb'



export default function Home({ isConnected }) {
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

export async function getServerSideProps(context) {
  
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  }
}
  

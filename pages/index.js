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



export default function Home({ properties }) {
  const { account, connect, connectors } = useStarknet()
  const router = useRouter()

  const { inGame } = useSelector((store) => (store._game))

  return (
    <div className="h-full w-screen flex flex-col">
      <Meta />
      <Navigation properties={properties} />

    </div>
  )
}

export async function getServerSideProps(context) {
  
  const { db } = await connectToDatabase();
  const data = await db.collection("events").find({}).limit(5).sort({ _id: -1 }).toArray(); 

  const properties = JSON.parse(JSON.stringify(data));


  return {
    props: { properties: properties  },
  }
}
  

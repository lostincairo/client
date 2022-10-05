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
import fetch from 'isomorphic-unfetch'



export default function Home({event}) {
  const { account, connect, connectors } = useStarknet()
  const [connectMenuToggled, setConnectMenuToggled] = React.useState(false);
  const router = useRouter()

  const { inGame } = useSelector((store) => (store._game))


  return (
    <div className="h-screen w-screen flex flex-col bg-cover bg-[url('../public/background.png')]">
      <Meta />
      { inGame ||<Header /> }
      <div>{ event.name }</div>
      <Navigation />
      { inGame || <FooterComponent /> }
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return {
    props: {
      event: json,
    },
  };
}


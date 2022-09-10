import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'

import { useStarknet } from '@starknet-react/core'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent.js'
import Navigation from '../components/Navigation'


export default function Home() {
  const { account, connect, connectors } = useStarknet()
  const [connectMenuToggled, setConnectMenuToggled] = React.useState(false);
  const router = useRouter()

  return (
    <div className="h-screen w-screen flex flex-col bg-cover bg-[url('../public/background.png')]">
      <Meta />
      <Header />
      <Navigation />
      <FooterComponent />
    </div>
  )
}

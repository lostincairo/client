import '../styles/globals.css'
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import { Provider } from "react-redux"
import store from "../redux/store"
import ControllerConnector from "@cartridge/connector";


function MyApp({ Component, pageProps }) {

  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ]

  // const cartridge = new ControllerConnector();

  return (
    <Provider store={store}>
      <StarknetConfig autoConnect connectors={connectors}>
        <Component {...pageProps} />
      </StarknetConfig>
    </Provider>
  ); 
}

export default MyApp
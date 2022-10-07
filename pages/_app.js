import '../styles/globals.css'
import { StarknetProvider, getInstalledInjectedConnectors } from '@starknet-react/core'
import { Provider } from "react-redux"
import store from "../redux/store"
import ControllerConnector from "@cartridge/connector";


function MyApp({ Component, pageProps }) {
  const connectors = getInstalledInjectedConnectors()
  const cartridge = new ControllerConnector();

  return (
    <Provider store={store}>
      <StarknetProvider autoConnect connectors={connectors}>
        <Component {...pageProps} />
      </StarknetProvider>
    </Provider>
  ); 
}

export default MyApp
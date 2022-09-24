import '../styles/globals.css'
import { StarknetProvider, getInstalledInjectedConnectors } from '@starknet-react/core'
import { Provider } from "react-redux"
import store from "../redux/store"

function MyApp({ Component, pageProps }) {
  const connectors = getInstalledInjectedConnectors()
  return (
    <Provider store={store}>
      <StarknetProvider connectors={connectors} autoConnect>
        <Component {...pageProps} />
      </StarknetProvider>
    </Provider>
  ); 
}

export default MyApp
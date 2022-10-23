import "../styles/globals.css";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ControllerConnector from "@cartridge/connector";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];
  // const cartridge = new ControllerConnector();

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <StarknetConfig autoConnect connectors={connectors}>
          <Component {...pageProps} />
        </StarknetConfig>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;

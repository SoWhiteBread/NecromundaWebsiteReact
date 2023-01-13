import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./App/store1";
import { fetchCampaignInfo } from "./App/actions1";

import App from "./App";

store.dispatch(fetchCampaignInfo());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

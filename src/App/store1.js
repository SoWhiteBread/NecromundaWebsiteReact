import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import campaignInfo from "./reducers1";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store1 = createStore(campaignInfo, composeEnhancers(applyMiddleware(thunk)));

export default store1;

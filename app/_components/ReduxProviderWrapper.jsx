"use client";
import { Provider } from "react-redux";

import { store } from "../_services/store";
function ReduxProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProviderWrapper;

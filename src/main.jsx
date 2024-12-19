import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";


const rootContainer = document.getElementById("root");
if (rootContainer) {
  ReactDOM.createRoot(rootContainer).render(
    <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
    </React.StrictMode>
  );
}

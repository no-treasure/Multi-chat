import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"

import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <ChakraProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ChakraProvider>
)

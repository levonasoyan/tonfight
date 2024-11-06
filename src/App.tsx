import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TonConnectUIProvider } from "@tonconnect/ui-react"

import Home from "./pages/Home/Index"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"

const App = () => {
  return (
    <TonConnectUIProvider
      manifestUrl="https://levonasoyan.github.io/tonfight/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/<YOUR_APP_NAME>",
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TonConnectUIProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TonConnectUIProvider } from "@tonconnect/ui-react"

import Home from "./pages/Home/Index"

const App = () => {
  return (
    <TonConnectUIProvider
      manifestUrl="https://levonasoyan.github.io/tonfight/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/<YOUR_APP_NAME>",
      }}
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TonConnectUIProvider>
  )
}

export default App

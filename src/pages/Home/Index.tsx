import { Box, Button, Typography } from "@mui/material"
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react"
import { useCallback, useState } from "react"
import background from "../../assets/images/home.webp"
import ConnectWalletModal from "../../components/ConnectWalletModal"
import Drawer from "react-bottom-drawer"
import ChooseBetAmountDrawer from "../../components/ChooseBetAmountDrawer"

const Home = () => {
  const userFriendlyAddress = useTonAddress()
  const [isVisible, setIsVisible] = useState(false)
  const onClose = useCallback(() => {
    setIsVisible(false)
  }, [])
  const wallet = useTonWallet()

  if (!wallet) {
    return <ConnectWalletModal />
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {wallet && (
            <Typography color="red">
              TON wallet connected V {userFriendlyAddress.slice(0, 6)}...
            </Typography>
          )}

          <Button onClick={() => setIsVisible(true)}>Fight</Button>
          <Button onClick={() => setIsVisible(true)}>Invite friend</Button>
          <Button onClick={() => setIsVisible(true)}>Choose Character</Button>
          {wallet ? "" : <TonConnectButton />}
          {/* For testing purposes */}
          {/* {wallet ? (
            <MenuButton
              title="Disconnect wallet"
              onClick={async () => await tonConnectUI.disconnect()}
            />
          ) : null} */}
        </Box>
      </Box>
      <ChooseBetAmountDrawer isVisible={isVisible} onClose={onClose} />
    </>
  )
}

export default Home

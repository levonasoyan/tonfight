import { Box } from "@mui/material"
import MenuButton from "../../components/MenuButton"
import background from "../../assets/images/home_bg.png"
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react"
import { useTonConnectUI } from "@tonconnect/ui-react"

const Home = () => {
  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWallet()

  console.log(wallet, 111)

  return (
    <Box
      sx={{
        // bgcolor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
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
        <MenuButton title="Play" />
        <MenuButton title="Invite Friend" />
        <MenuButton title="Choose Character" />
        {wallet ? (
          <p color="white">Your wallet is connected</p>
        ) : (
          <TonConnectButton />
        )}
        {wallet ? (
          <MenuButton
            title="Disconnect wallet"
            onClick={async () => await tonConnectUI.disconnect()}
          />
        ) : null}
      </Box>
    </Box>
  )
}

export default Home

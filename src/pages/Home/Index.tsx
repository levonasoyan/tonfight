import { Box, Typography } from "@mui/material"
import { TonConnectButton, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react"
import background from "../../assets/images/home_bg.png"
import MenuButton from "../../components/MenuButton"

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
        <MenuButton onClick={() => console.log("Play")} title="Play" />
        <MenuButton onClick={() => console.log("Play")} title="Invite Friend" />
        <MenuButton
          onClick={() => console.log("Play")}
          title="Choose Character"
        />
        {wallet ? (
          <Typography color="white">Your wallet is connected</Typography>
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

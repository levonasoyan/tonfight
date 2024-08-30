import { Box, Typography } from "@mui/material"
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react"
import background from "../../assets/images/home_bg.png"
import MenuButton from "../../components/MenuButton"
import ConnectWalletModal from "../../components/ConnectWalletModal"
import ChooseBetAmountModal from "../../components/ChooseBetAmountModal"
import { useState } from "react"

const Home = () => {
  const [tonConnectUI] = useTonConnectUI()
  const userFriendlyAddress = useTonAddress()
  const [chooseBetAmountModalOpen, setChooseBetAmountModalOpen] =
    useState(false)

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

          <MenuButton
            onClick={() => setChooseBetAmountModalOpen(true)}
            title="Fight"
          />
          <MenuButton
            onClick={() => setChooseBetAmountModalOpen(true)}
            title="Invite Friend"
          />
          <MenuButton
            onClick={() => console.log("Play")}
            title="Choose Character"
          />
          {wallet ? "" : <TonConnectButton />}
          {wallet ? (
            <MenuButton
              title="Disconnect wallet"
              onClick={async () => await tonConnectUI.disconnect()}
            />
          ) : null}
        </Box>
      </Box>
      <ChooseBetAmountModal
        isOpen={chooseBetAmountModalOpen}
        setOpen={setChooseBetAmountModalOpen}
      />
    </>
  )
}

export default Home

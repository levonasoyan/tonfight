import { Box, Typography } from "@mui/material"

import { TonConnectButton } from "@tonconnect/ui-react"

const ConnectWalletModal = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Typography color="white" textAlign="center">
        Please Connect Your Telegram wallet in order to be able to play the game
      </Typography>
      <TonConnectButton />
    </Box>
  )
}

export default ConnectWalletModal

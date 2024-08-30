import { Box } from "@mui/material"
import MenuButton from "../../components/MenuButton"
import background from "../../assets/images/home_bg.png"
const Home = () => {
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <MenuButton title="Play" />
        <MenuButton title="Invite Friend" />
        <MenuButton title="Choose Character" />
      </Box>
    </Box>
  )
}

export default Home

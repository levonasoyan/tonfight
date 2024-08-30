import { Button } from "@mui/material"

type Props = {
  title: string
  onClick: () => void
}

const handDrawnButtonStyles = {
  backgroundColor: "white",
  width: "100%",
  color: "black",
  border: "2px solid black",
  padding: "10px 20px",
  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  fontSize: "16px",
  borderRadius: "8px",
  boxShadow: "3px 3px 0px black",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    boxShadow: "5px 5px 0px black",
    transform: "translate(-2px, -2px)",
  },
}

const MenuButton = ({ title, onClick }: Props) => {
  return (
    <Button sx={handDrawnButtonStyles} onClick={onClick}>
      {title}
    </Button>
  )
}

export default MenuButton

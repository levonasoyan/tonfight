import { Button } from "@mui/material"

type Props = {
  text: string
  onClick: () => void
}
const PrimaryButton = ({ text, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "white",
        backgroundColor: "black",
        padding: "15px 50px",
        borderRadius: "10px",
      }}
    >
      {text}
    </Button>
  )
}

export default PrimaryButton

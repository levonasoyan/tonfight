import { Button } from "@mui/material"

type Props = {
  amount: number
}
const BetAmountButton = ({ amount }: Props) => {
  return (
    <Button
      sx={{
        width: "15px",
        padding: "10px 20px",
        height: "15px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      {amount}
    </Button>
  )
}

export default BetAmountButton

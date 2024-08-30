import { Box, Input, Modal, Typography } from "@mui/material"
import BetAmountButton from "../BetAmountButtons"

type Props = {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: 450,
  bgcolor: "black",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  p: 4,
}
const ChooseBetAmountModal = ({ isOpen, setOpen }: Props) => {
  return (
    <Modal
      open={isOpen}
      sx={{ zIndex: 9999 }}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
        >
          Choose amount of bet
        </Typography>
        <Input
          type="number"
          sx={{
            mt: "30px",
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #484850",
              borderRadius: "5px 5px 0 0",
            },
            border: "1px solid white",
            color: "white",
            borderRadius: "10px",
            width: "60%",
          }}
        ></Input>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexDirection: "column",
            mt: "30px",
          }}
        >
          {[10, 20, 30, 40].map((amount) => {
            return <BetAmountButton amount={amount} />
          })}
        </Box>
      </Box>
    </Modal>
  )
}

export default ChooseBetAmountModal

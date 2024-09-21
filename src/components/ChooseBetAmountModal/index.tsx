import {
  Box,
  Button,
  Input,
  Modal,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import { useState } from "react"
import PrimaryButton from "../PrimaryButton"

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
  color: "black",
  borderRadius: "10px",
  backgroundColor: "white",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",

  p: 4,
}
const ChooseBetAmountModal = ({ isOpen, setOpen }: Props) => {
  const [value, setValue] = useState(10)

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: number
  ) => {
    setValue(value)
  }

  console.log(value, 111)

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
            border: "1px solid black",
            color: "black",
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
          <ToggleButtonGroup
            size="medium"
            value={value}
            onChange={handleChange}
          >
            <Button value={10} key={10} sx={{ color: "black" }}>
              10
            </Button>
            <Button value={20} key={20} sx={{ color: "black" }}>
              20
            </Button>
          </ToggleButtonGroup>
        </Box>
        <Box mt="30px">
          <PrimaryButton text="Play" onClick={() => console.log(value)} />
        </Box>
      </Box>
    </Modal>
  )
}

export default ChooseBetAmountModal

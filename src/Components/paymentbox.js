import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import foodpay from "../Data/Foodpay";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function PaymentBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          fontSize: 32,
          fontFamily: "kanit",
          fontWeight: 500,
          backgroundColor: "#fcd033",
        }}
      >
        ชำระเงิน
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "40%",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                ราคารวม
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  ml: 20,
                  mr: 16,
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                {foodpay}.00
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                บาท
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "40%",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                ส่วนลด
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  ml: 22,
                  mr: 16,
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                0.00
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  //   ml: 70,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                บาท
              </Typography>
            </Box>
            <Button
              sx={{
                mr: 1,
                ml: 58,
                mt: 1,
                mb: 1,
                width: "160px",
                fontSize: 20,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                backgroundColor: "rgb(39,168,68)",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
            >
              โปรโมชั่น
            </Button>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <FormControlLabel
                sx={{
                  ml: 1,
                  width: "40%",
                }}
                value="end"
                control={<Checkbox />}
                label={
                  <span
                    style={{
                      fontFamily: "kanit",
                      fontWeight: 700,
                      fontSize: "20px",
                      
                    }}
                  >
                    ค่าบริการ
                  </span>
                }
                labelPlacement="end"
              />
              <Typography
                sx={{
                  mt: 1,
                  ml: 22,
                  mr: 16,
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                0.00
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                บาท
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "44%",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                ภาษีมูลค่าเพิ่ม
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  ml: 20,
                  mr: 16,
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                0.00
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                บาท
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "40%",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                ยอดที่ต้องชำระ
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  ml: 20,
                  mr: 16,
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                {foodpay}.00
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                บาท
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "43%",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                เงินที่รับ
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  ml: 20,
                  mr: 16,
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                0.00
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                บาท
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Button
                sx={{
                  mr: 1,
                  ml: "15%",
                  mt: "40%",
                  mb: 1,
                  width: "200px",
                  height: "70px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#fcd033",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
              >
                บัตรเครดิต
              </Button>
              <Button
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: "40%",
                  mb: 1,
                  width: "200px",
                  height: "70px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#0079ff",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
              >
                QR code/เงินโอน
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Button
                sx={{
                  mr: 1,
                  ml: "15%",
                  mt: 1,
                  mb: 1,
                  width: "200px",
                  height: "70px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#fc7349",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
              >
                เงินเชื่อ
              </Button>
              <Button
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "200px",
                  height: "70px",
                  fontSize: 20,
                  fontFamily: "kanit",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#27a844",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
              >
                เงินสด
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </DialogContent>
    </div>
  );
}

// export default PaymentBox;

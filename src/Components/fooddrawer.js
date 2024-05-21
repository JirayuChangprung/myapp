import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import PersonIcon from "@mui/icons-material/Person";
import SyncIcon from "@mui/icons-material/Sync";
import Modal from "@mui/material/Modal";
import PaymentBox from "./paymentbox";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import foodorder from "../Data/Foodorder";
import foodpay from "../Data/Foodpay";

const FoodDrawer = () => {
  const [age, setAge] = React.useState("");

  const [total, settotal] = React.useState(0);

  useEffect(() => {
    let temp = 0;
    foodorder.forEach((element) => {
      temp += element.price;
      settotal(temp);
    });
    console.log(total);
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    foodpay.push(total);
    console.log(foodpay);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Foodtotal, setFoodtotal] = useState([0]);

  const handleOrder = () => {
    setFoodtotal([total]);
    console.log(total);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: 16,
    fontFamily: "kanit",
    fontWeight: 700,
    textAlign: "left",
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    border: 0,
  }));

  const [value, setValue] = useState(1);

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    } else if (value === 0) {
      setValue(value + 0);
    }
  };

  const handlePlus = () => {
    setValue(value + 1);
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            sx={{
              alignItems: "center",
              mr: 1,
              ml: 1,
              mt: 1,
              mb: 1,
              width: "130px",
              //   display: { xs: "none", md: "flex" },
              fontSize: 14,
              fontFamily: "kanit",
              fontWeight: 700,
              letterSpacing: ".1rem",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              color: "black",
              textDecoration: "none",
              backgroundColor: "rgb(250,204,53)",
              "&:hover": {
                backgroundColor: "darkorange",
              },
            }}
          >
            <PersonIcon sx={{ mr: 1 }} />
            ข้อมูลลูกค้า
          </Button>

          <Button
            sx={{
              alignItems: "center",
              mr: 1,
              ml: 1,
              mt: 1,
              mb: 1,
              width: "120px",
              fontSize: 14,
              fontFamily: "kanit",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              backgroundColor: "rgb(250,204,53)",
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            <PersonIcon sx={{ mr: 1 }} />
            พนักงานรับออเดอร์
          </Button>
          <Button
            sx={{
              alignItems: "center",
              mr: 1,
              ml: 1,
              mt: 1,
              mb: 1,
              width: "140px",
              fontSize: 14,
              fontFamily: "kanit",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              backgroundColor: "rgb(250,204,53)",
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            <SyncIcon sx={{ mr: 3 }} />
            รวมโต๊ะ
          </Button>
          <Button
            sx={{
              alignItems: "center",
              mt: 1,
              mb: 1,
              width: "140px",
              fontSize: 14,
              fontFamily: "kanit",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              backgroundColor: "rgb(250,204,53)",
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            <SyncAltIcon sx={{ mr: 3 }} />
            ย้ายโต๊ะ
          </Button>
          <Divider />
          <Box>
            <FormControl sx={{ mt: 2, ml: 1, width: "150px" }}>
              <Select labelId="" id="" value={age} onChange={handleChange}>
                <MenuItem>ลูกค้าทั่วไป</MenuItem>
                <MenuItem>ลูกค้าพิเศษ</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2, ml: 1, width: "150px" }}>
              <Select
                labelId="select-label"
                id="select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem id="menu-item-1">ทานร้าน</MenuItem>
                <MenuItem id="menu-item-2">ทานที่บ้าน</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              sx={{
                mt: 2,
                ml: 1,
                width: "150px",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <OutlinedInput
                sx={{
                  fontSize: 16,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                  textDecoration: "none",
                }}
                placeholder="0"
              />
              <FormHelperText
                sx={{
                  fontSize: 18,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                คน
              </FormHelperText>
            </FormControl>
            <Button
              sx={{
                mr: 1,
                ml: 1,
                mt: 3,
                mb: 1,
                width: "100px",
                fontSize: 18,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                backgroundColor: "darkorange",
                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
            >
              เลือกโต๊ะ
            </Button>
            <Divider sx={{ mt: 5 }} />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 1,
                  ml: 2,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 16,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                รายการ
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  ml: 30,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 16,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                จำนวน
              </Typography>
              <Typography
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 16,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                จำนวนเงิน
              </Typography>
            </Box>
            <Divider />
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
                <TableBody>
                  {foodorder.map((row) => (
                    <StyledTableRow>
                      <FreeBreakfastIcon
                        sx={{ position: "relative", top: "5px", left: "10px" }}
                      />
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <TableCell
                        align="right"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "80px",
                          marginLeft: "15%",
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            fontSize: "1.2rem",
                            borderColor: "green",
                            color: "green",
                          }}
                          onClick={handlePlus}
                        >
                          +
                        </Button>
                        <Typography variant="body1">{value}</Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            fontSize: "1.2rem",
                            borderColor: "green",
                            color: "green",
                          }}
                          onClick={handleMinus}
                        >
                          -
                        </Button>
                      </TableCell>
                      <StyledTableCell align="right">
                        {row.price}.00
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Divider />
          <Box>
            <Button
              onClick={handleOrder}
              sx={{
                mr: 1,
                ml: 53,
                mt: 1,
                mb: 1,
                width: "160px",
                fontSize: 16,
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
              ยืนยันออเดอร์
            </Button>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Typography
                sx={{
                  mr: 20,
                  ml: 2,
                  mt: 1,
                  mb: 1,
                  width: "100px",
                  fontSize: 16,
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
                  fontSize: 16,
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                }}
              >
                {Foodtotal}.00
              </Typography>
            </Box>
            <Divider />
            <Button
              sx={{
                mr: 1,
                ml: 1,
                mt: 1,
                mb: 1,
                width: "15%",
                //   display: { xs: "none", md: "flex" },
                fontSize: 16,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                backgroundColor: "darkorange",
                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
            >
              ฟรี
            </Button>
            <Button
              sx={{
                mr: 1,
                ml: 1,
                mt: 1,
                mb: 1,
                width: "79%",
                fontSize: 16,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                backgroundColor: "rgb(39, 168, 68)",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
              onClick={handleOpen}
            >
              ชำระเงิน
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 1400,
                  height: 900,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                }}
              >
                <PaymentBox />
              </Box>
            </Modal>
            <Divider />
            <Button
              sx={{
                mr: 1,
                ml: 1,
                mt: 1,
                mb: 1,
                width: "30%",
                fontSize: 16,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              แยกใบเสร็จ
            </Button>
            <Button
              sx={{
                mr: 1,
                ml: 1,
                mt: 1,
                mb: 1,
                width: "30%",
                fontSize: 16,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              พักบิล
            </Button>
            <Button
              sx={{
                mr: 1,
                ml: 1,
                mt: 1,
                mb: 1,
                width: "30%",
                fontSize: 16,
                fontFamily: "kanit",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              ยกเลิกบิล
            </Button>
            <Divider />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodDrawer;

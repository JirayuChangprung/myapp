import React from "react";
import { Grid, CssBaseline, styled, Button, TextField } from "@mui/material";
import "./login.css";
import cof from "./images/cof.png";
import thai from "./images/thai.png";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
  margin: "0",
  display: "block",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
});

const StyledButton = styled(Button)({
  marginTop: "1%",
  width: "100%",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "12px 24px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "rgb(252,208,51)",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "orange",
    color: "white",
  },
});

const IconContainer = styled("div")({
  position: "absolute",
  top: "60px",
  right: "60px",
  transform: "translate(0%, -50%)",
});

// const handleLogin = () => {
  
// };

export default function Login() {
  const navigate = useNavigate()
  return (
    <Grid container spacing={2}>
      <CssBaseline />
      <Grid item xs={12} md={8}>
        <Img alt="complex" src={cof} />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          fontSize: 24,
          fontFamily: "kanit",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "black",
          textDecoration: "none",
        }}
      >
        <div className="login-container">
          <IconContainer>
            <img src={thai} alt="Thai Flag" />
          </IconContainer>
          เข้าสู่ระบบ
          <TextField
            variant="outlined"
            fullWidth
            margin="dense"
            style={{
              backgroundColor: "lightgray",
              // opacity: "0.2",
            }}
          />
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            style={{
              backgroundColor: "lightgray",
              // opacity: "0.2",
            }}
          />
          <Button
            sx={{
              fontSize: 14,
              fontFamily: "kanit",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            ลืมรหัสผ่าน
          </Button>
          <StyledButton
            variant="contained"
            onClick={() => navigate('Foodordering')}
            sx={{
              fontSize: 24,
              fontFamily: "kanit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            เข้าสู่ระบบ
          </StyledButton>
          <div className="text-container">
            <h5>2023 Rise+ Version : 5fc92bc2</h5>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

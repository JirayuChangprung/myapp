import * as React from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import FoodDrawer from "./fooddrawer";
import FoodList from "./foodlist";

const pages = ["ขาย", "โต๊ะ", "ใบเสร็จ", "บิลทั้งหมด", "ลิ้นชักเงินสด"];

const StyledAppbar = styled(AppBar)({
  backgroundColor: "white",
  height: "80px",
marginLeft: "0%",
});


const FoodAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const StyledButton = styled(Button)({
    marginTop: "1%",
    // width: "80%",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "12px 36px",
    border: "none",
    lineHeight: 1.5,
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    borderBottom: "2px solid transparent",
    "&:hover": {
      backgroundColor: "white",
      color: "orange",
      borderBottomColor: "orange",
    },
  });

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }


  const drawer = (
    <div>
      <Divider />
      <FoodList/>
    </div>
  );
  return (
    <Grid>
      <Grid>
        <StyledAppbar position="fixed">
          <Container maxWidth="xll">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "kanit",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                My app
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <StyledButton
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      mr: 6,
                      ml: 10,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "kanit",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    {page}
                  </StyledButton>
                ))}
              </Box>
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Toolbar></Toolbar>
          </Container>
        </StyledAppbar>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            // mt:2,
            "& .MuiDrawer-paper": {
              width: 600,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader
            sx={{ display: "flex", justifyContent: "flex-start", height: 80 }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
            </IconButton>
            <Button
              sx={{
                mr: 1,
                ml: 15,
                display: { xs: "none", md: "flex" },
                fontSize: 14,
                fontFamily: "kanit",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              เรียกพนักงาน
            </Button>
            <Button
              sx={{
                mr: 1,
                ml: 0,
                display: { xs: "none", md: "flex" },
                fontSize: 14,
                fontFamily: "kanit",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              POS1
            </Button>
            <Button
              sx={{
                mr: 1,
                ml: 0,
                display: { xs: "none", md: "flex" },
                fontSize: 14,
                fontFamily: "kanit",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              ธงไทย
            </Button>
            <Button
              sx={{
                mr: 1,
                ml: 0,
                display: { xs: "none", md: "flex" },
                fontSize: 14,
                fontFamily: "kanit",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              admin
            </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="AAA" src="/static/images/avatar" />
              </IconButton>
            </Tooltip>
          </DrawerHeader>
          <Divider />
          <Grid item xs={12}>
            <FoodDrawer />
          </Grid>
        </Drawer>
      </Grid>
      <Grid item xs={12} md={4}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              height: "100%",
              marginTop: "6%",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default FoodAppBar;

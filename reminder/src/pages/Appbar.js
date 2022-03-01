import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const history = useNavigate();
  function handleClick() {
    history("/signup");
  }
  function loginClick() {
    history("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "brown", color: "white" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reminder
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            SignUp
          </Button>
          <Button color="inherit" onClick={loginClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

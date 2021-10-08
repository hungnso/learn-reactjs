import { Box, IconButton, MenuItem, Menu } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle, Close } from "@material-ui/icons";
import CodeIcon from "@material-ui/icons/Code";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};
export default function Header() {
  const dispatch = useDispatch();
  const loggesInUser = useSelector((state) => state.user.current.id);
  console.log(loggesInUser);
  const isLoggedIn = !!loggesInUser;
  console.log(isLoggedIn);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUseClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link to="/products" className={classes.link}>
              {" "}
              Test Code
            </Link>
          </Typography>

          <NavLink to="/todos" className={classes.link}>
            <Button color="inherit">TODOS</Button>
          </NavLink>
          <NavLink to="/colorboxs" className={classes.link}>
            <Button color="inherit">COLORBOXS</Button>
          </NavLink>
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUseClick}>
              <AccountCircle />
            </IconButton>
          )}
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <DialogContentText>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Go to the Login
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Go to the Register
                  </Button>
                </Box>
              </>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  MenuItem,
  Menu
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions/index";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(4)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  button: {
    backgroundColor: "#FFFFFF",
    marginRight: theme.spacing(2),
    textTransform: "capitalize"
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  typography: {
    fontWeight: "bold",
    fontFamily: "roboto"
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const logOut = () => {
    props.logOut();
    props.history.push("/");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/markets" className={classes.link}>
        <MenuItem>
          <Typography className={classes.typography}>Markets</Typography>
        </MenuItem>
      </Link>
      {props.isAuth ? (
        <div>
          {" "}
          <Link to="/orders" className={classes.link}>
            <MenuItem>
              <Typography className={classes.typography}>Orders</Typography>
            </MenuItem>
          </Link>
          <Link to="/history" className={classes.link}>
            <MenuItem>
              <Typography className={classes.typography}>History</Typography>
            </MenuItem>
          </Link>
          <Link to="/account" className={classes.link}>
            <MenuItem>
              <Typography className={classes.typography}>Account</Typography>
            </MenuItem>
          </Link>
          <Link to="/" className={classes.link}>
            <MenuItem>
              <Typography className={classes.typography}>
                Notifications
              </Typography>
            </MenuItem>
          </Link>
        </div>
      ) : null}
      {!props.isAuth ? (
        <div>
          <Link to="/signup" className={classes.link}>
            <MenuItem>
              <Typography className={classes.typography}>Signup</Typography>
            </MenuItem>
          </Link>
          <Link to="/login" className={classes.link}>
            <MenuItem>
              <Typography className={classes.typography}>Signin</Typography>
            </MenuItem>
          </Link>{" "}
        </div>
      ) : (
        <MenuItem onClick={logOut}>
          <Typography className={classes.typography}>Logout</Typography>
        </MenuItem>
      )}
    </Menu>
  );

  const img = (
    <img
      src="https://files.fm/down.php?i=2e26s43t"
      alt="forex"
      style={{ height: "40px" }}
    />
  );

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#353A3E" }}>
        <Toolbar>
          <Link to="/">
            <div edge="start" className={classes.menuButton} aria-label="menu">
              {img}
            </div>
          </Link>

          <div className={classes.title}>
            <Link to="/markets" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={classes.button}
                style={{ color: "#31D8A4" }}
              >
                Markets
              </Button>
            </Link>

            {props.isAuth ? (
              <>
                <Link to="/orders" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{ color: "#31D8A4" }}
                  >
                    Orders
                  </Button>
                </Link>
                <Link to="/history" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{ color: "#31D8A4" }}
                  >
                    History
                  </Button>
                </Link>
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{ color: "#31D8A4" }}
                  >
                    Account
                  </Button>
                </Link>{" "}
              </>
            ) : null}
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.title}>
              {props.isAuth ? (
                <IconButton
                  aria-label="show 11 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              ) : null}

              {!props.isAuth ? (
                <div>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      style={{ color: "#31D8A4" }}
                    >
                      Signup
                    </Button>
                  </Link>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      style={{ color: "#31D8A4" }}
                    >
                      Signin
                    </Button>
                  </Link>{" "}
                </div>
              ) : (
                <Button
                  variant="contained"
                  className={classes.button}
                  style={{ color: "#EF3416" }}
                  onClick={logOut}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const mapStateToProp = state => {
  return {
    isAuth: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProp,
  actions
)(withRouter(Navbar));

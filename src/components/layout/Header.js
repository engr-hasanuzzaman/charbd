import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// copy right component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

function Header() {
  const activeStyle = { color: "green" };
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Char BD LTD.
        </Typography>
        <nav>
          <Button color="primary" className={classes.link}>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home Page
            </NavLink>
          </Button>

          <Button color="primary" className={classes.link}>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </Button>
          <Button color="primary" className={classes.link}>
            <NavLink to="/advertisements" activeStyle={activeStyle}>
              Advertisements
            </NavLink>
          </Button>
          <Button color="primary" className={classes.link}>
            <NavLink to="/courses" activeStyle={activeStyle}>
              Courses
            </NavLink>
          </Button>
          <Button color="primary" className={classes.link}>
            <NavLink to="/test" activeStyle={activeStyle}>
              Material Design
            </NavLink>
          </Button>
          <Button color="primary" className={classes.link}>
            <NavLink to="/flex" activeStyle={activeStyle}>
              Flex experiment
            </NavLink>
          </Button>
        </nav>
        <Button color="primary" variant="contained" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

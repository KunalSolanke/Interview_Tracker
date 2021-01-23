import React from "react";
import navbarImg from "../assets/navbar_image.svg";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    maxWidth: "1500px",
    margin: "10px auto",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
  },
  navLink: {
    marginLeft: "30px",
    "&:hover": {
      color: "#2272FF",
    },
    transition: "all .2s ease-in",
    outline: "none",
  },
  landingBottom: {
    position: "absolute",
    bottom: 50,
    left: 5,
  },
  navImg: {
    position: "absolute",
    top: "-10px",
    right: 0,
  },
  logo: {
    fontWeight: "700",
    color: "#2272FF",
    fontSize: "26px",
  },
  activeLink: {
    color: "#2272FF",
  },
});
function BaseLayout() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
      <img src={navbarImg} className={classes.navImg} />
      <div className={classes.container}>
        <nav className={classes.navBar}>
          <div className={classes.logoDiv}>
            <h1 className={classes.logo}>InterviewTrack</h1>
          </div>
          <div className={classes.navLinks}>
            <NavLink
              activeClassName={classes.activeLink}
              to="/problems"
              className={classes.navLink}
            >
              practice
            </NavLink>
            <NavLink
              activeClassName={classes.activeLink}
              to="/interviews"
              className={classes.navLink}
            >
              Interviews
            </NavLink>
            <NavLink
              activeClassName={classes.activeLink}
              to="/accounts/register"
              className={classes.navLink}
            >
              Register
            </NavLink>
            {authState.token ? null : (
              <NavLink
                activeClassName={classes.activeLink}
                to="/accounts/login"
                className={classes.navLink}
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BaseLayout;

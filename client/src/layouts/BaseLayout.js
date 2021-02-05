import React,{useEffect} from "react";
import navbarImg from "../assets/navbar_image.svg";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {authLogout,getProfile} from '../store/actions/auth'

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
    top: "-40px",
    right: "-30px",
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
  useEffect(() => {
    (async()=>{
      if(localStorage.getItem("token")&&!authState.profile){
        await dispatch(getProfile()) ;
      }
  })()

    
  }, [])

  return (
    <div style={{ position: "relative", OverflowX: "hidden" }}>
      <img src={navbarImg} className={classes.navImg} />
      <div className={classes.container}>
        <nav className={classes.navBar}>
          <div className={classes.logoDiv}>
            <NavLink to="/">
              <h1 className={classes.logo}>InterviewTrack</h1>
            </NavLink>
          </div>
          <div className={classes.navLinks}>
            <NavLink
              activeClassName={classes.activeLink}
              to="/practice"
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
            {authState.profile ? (
              <>
              <NavLink
                activeClassName={classes.activeLink}
                to="/profile"
                className={classes.navLink}
              >
                {authState.profile.username}
              </NavLink>
              <NavLink
                activeClassName={classes.activeLink}
                className={classes.navLink}
                to="#"
                onClick = {()=>{dispatch(authLogout())}}
              >
                Logout
              </NavLink>
              </>
            ) : (
              <>
              <NavLink
                activeClassName={classes.activeLink}
                to="/accounts/login"
                className={classes.navLink}
              >
                Login
              </NavLink>
              <NavLink
                activeClassName={classes.activeLink}
                to="/accounts/register"
                className={classes.navLink}
              >
                Register
              </NavLink>
              </>
            )}

          </div>
        </nav>
      </div>
      <div
        style={{
          backgroundColor: "#508DF9",
          width: "100%",
          height: "3px",
          marginTop: "53px",
        }}
      ></div>
    </div>
  );
}

export default BaseLayout;

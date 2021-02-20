import React, { useEffect, useRef } from "react";
import navbarImg from "../assets/navbar_image.svg";
import { NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/auth";
import "./keyframe.css";

const useStyles = makeStyles((theme) => ({
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    maxWidth: "1500px",
    margin: "10px auto",
    [theme.breakpoints.down("650")]: {
      margin: "0",
    },
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.down("650")]: {
      // paddingBottom: 0,
    },
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    zIndex: "+1",
    [theme.breakpoints.down("650")]: {
      padding: "60px 0",
      position: "absolute",
      right: "0px",
      height: "84vh",
      top: "16vh",
      backgroundColor: "#2272FF",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      opacity: 0,
      transform: "translateX(100%)",
      transition: "transform 0.5s ease-in, opacity 0.5s ease-in",
    },
  },
  navActive: {
    opacity: 1,
    transform: "translateX(0%)",
  },
  navLink: {
    marginLeft: "30px",
    "&:hover": {
      color: "#2272FF",
    },
    transition: "all .2s ease-in",
    outline: "none",
    [theme.breakpoints.down("650")]: {
      color: "#91b9ff",
      "&:hover": {
        color: "#fff",
      },
      margin: "0",
      fontSize: "18px",
    },
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
    [theme.breakpoints.down("650")]: {
      height: "22vh",
    },
  },
  logo: {
    fontWeight: "700",
    color: "#2272FF",
    fontSize: "28px",
  },
  activeLink: {
    color: "#2272FF",
    [theme.breakpoints.down("650")]: {
      color: "#fff",
    },
  },
  burger: {
    display: "none",
    zIndex: "1000",
    marginRight: "30px",
    cursor: "pointer",
    "&>div": {
      width: "25px",
      height: "3px",
      backgroundColor: "rgb(226, 226, 226)",
      margin: "4px",
      zIndex: "1000",
      transition: "all 0.3s ease",
    },
    [theme.breakpoints.down("650")]: {
      display: "block",
    },
  },

  line2Tog: {
    opacity: 0,
  },

  line1Tog: {
    transform: "rotate(-45deg) translate(-5px, 6px)",
  },

  line3Tog: {
    transform: "rotate(45deg) translate(-5px, -6px)",
  },
}));

function BaseLayout() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const classes = useStyles();
  useEffect(() => {}, [authState.token]);
  const history = useHistory();
  const burgerNode = useRef(null);
  const burger2 = useRef(null);
  const line1Node = useRef(null);
  const line2Node = useRef(null);
  const line3Node = useRef(null);

  const handleLogout = (e) => {
    //window.location.pathname = "/"
    dispatch(logout());
  };

  const navSlide = () => {
    let node = burgerNode.current;
    node.classList.toggle(classes.navActive);
    let navLinks = document.querySelectorAll(classes.navLink);

    node.childNodes.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.6s ease forwards ${index / 7 + 0.3}s`;
    });

    let node2 = burger2.current;
    node2.classList.toggle("cross");

    let nodeline1 = line1Node.current;
    nodeline1.classList.toggle(classes.line1Tog);

    let nodeline2 = line2Node.current;
    nodeline2.classList.toggle(classes.line2Tog);

    let nodeline3 = line3Node.current;
    nodeline3.classList.toggle(classes.line3Tog);
  };

  return (
    <div style={{ position: "relative", OverflowX: "hidden" }}>
      <img src={navbarImg} className={classes.navImg} />
      <div className={classes.container}>
        <nav className={classes.navBar}>
          <div
            className={classes.logoDiv}
            onClick={() => {
              let cross = document.getElementsByClassName("cross");
              console.log(cross);
              if (cross.length) {
                burger2.current.click();
              }
            }}
          >
            <NavLink to="/">
              <h1 className={classes.logo}>InterviewTrack</h1>
            </NavLink>
          </div>
          <div
            className={classes.navLinks}
            ref={burgerNode}
            onClick={() => {
              burger2.current.click();
            }}
          >
            <NavLink
              activeClassName={classes.activeLink}
              to="/practice"
              className={classes.navLink}
            >
              Practice
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
              to="/companies"
              className={classes.navLink}
            >
              Companies
            </NavLink>
            {authState.token ? (
              <>
                <NavLink
                  activeClassName={classes.activeLink}
                  to="/profile"
                  className={classes.navLink}
                >
                  {authState.username||authState.email}
                </NavLink>
                <div
                  activeClassName={classes.activeLink}
                  className={classes.navLink}
                  to="#"
                  onClick={() => {
                    dispatch(logout());
                    history.push("/accounts/login");
                  }}
                >
                  Logout
                </div>
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
          <div className={classes.burger} onClick={navSlide} ref={burger2}>
            <div className={classes.line1} ref={line1Node}></div>
            <div className={classes.line2} ref={line2Node}></div>
            <div className={classes.line3} ref={line3Node}></div>
          </div>
        </nav>
      </div>
      <div className={classes.navHorLine}></div>
    </div>
  );
}

export default BaseLayout;

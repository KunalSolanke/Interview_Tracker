import { red } from "@material-ui/core/colors";

const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";

export const register = theme => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    display: "block",
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  paper: {
    position: "relative",
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(3)}px ${theme.spacing(3)}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:'white',
    border:'1px solid #ededed',
    // "&:hover": {
    //   boxShadow: "0px 24px 36px rgba(131,153,167,0.99)"
    // },
    zIndex: 0
  },
  avatar: {
    marginTop: 20,
    position: "relative",
    background: "white",
    width: "100px",
    height: "100px",
    boxShadow: "0px 0px 12px rgba(131,153,167,0.19)"
  },

  icon: {
    width: "80px",
    height: "80px",
    color: "#22A6F1"
  },

  form: {
    margin: theme.spacing(2)
  },
  labels: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "10px",
    lineHeight: "5px",
    fontFamily: "PT Mono, monospace",
    fontWeight: 800,
    opacity: 1,
    color: `black`
  },

  inputs: {
    position: "relative",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "Cutive Mono, monospace",
    color: textDark,
    fontSize: "14px",
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: "8px",
    border: "2.4px solid black",
    boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
    borderColor: 'grey',
    backgroundColor:'#F3F7F7',

    "&:hover": {
      background: "rgba(169,198,217,0.36457423) "
    }
  },

  button: {
    color: 'green',
    background: "#2272FF",
    position: "relative",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(6),
    padding: `${theme.spacing(1.6)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",

    "&::before, &::after": {
      position: "absolute",
      content: '""',
      boxSizing: "border-box",
      borderRadius: "8px",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 1
    },
    "&::before": {
      borderBottom: "2px solid rgba(255,255,255,.58)",
      borderTop: "2px solid rgba(255,255,255,.58)",
      transform: "scale(0,1)"
    },
    "&::after": {
      borderLeft: "3px solid rgba(255,255,255,.58)",
      borderRight: "3px solid rgba(255,255,255,.58)",
      transform: "scale(1,0)"
    },
    "&:hover::before": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s"
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s"
    },
    "&::first-letter": {
      color: orange
    },
    "&:hover": {
      background: "rgba(169,198,217,0.8)",
      color: textLight
    }
  },
  error: {
    border: `1.2px solid ${red[900]}`,
    background: "rgba(169,198,217,0.29457423)",
    color: red[900],
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
  },

  passwordEye: {
    color: "rgba(131,153,167,0.9)",
    opacity: 0.7
  },
  MuiButtonLabel:{
    color:'green',
  }
});

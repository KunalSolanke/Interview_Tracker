import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "3rem 5rem 1rem 5rem",
    backgroundColor: "#FAFAFA",
    borderRadius: "20px",
    minWidth: "400px",
    width: "46vw",
  },
  tileHead: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",

    "&>div": {
      "&>h1": {
        fontWeight: "700",
        fontSize: "18px",
      },
      "&>p": {
        fontWeight: "300",
        fontSize: "12px",
      },
    },
    "&>img": {
      width: "50px",
      minHeight: "50px",
      objectFit: "cover",
      borderRadius: "100%",
      marginRight: "10px",
    },
  },
  interViewImage: {
    marginBottom: "2rem",
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  iDescription: {
    "&>p": {
      fontWeight: "300",
      fontSize: "16px",
    },
  },
  bottom: {
    marginTop: "2rem",
    color: "#508DF9",
    textAlign: "center",
    fontSize: "14px",
  },
});
function InterViewTile({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.tileHead}>
        <img src={data.user.pic} alt="profile"></img>
        <div>
          <h1>{data.title}</h1>
          <p>{data.created_at}</p>
        </div>
      </div>
      <img className={classes.interViewImage} alt="image" src={data.pic}></img>
      <div className={classes.iDescription}>
        <p>{data.description}</p>
      </div>
      <div className={classes.bottom}>
        <p>Read More</p>
      </div>
    </div>
  );
}

export default InterViewTile;

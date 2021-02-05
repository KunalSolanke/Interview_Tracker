import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "400px",
    flexGrow: 1,
  },
  dots: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    "&>div": {
      width: "16px",
      height: "5px",
      borderRadius: "6px",
      backgroundColor: "grey",
      transition: "all .2s ease-in",
      marginRight: "5px",
    },
  },
  active: {
    width: "20px !important",
    backgroundColor: "#508DF9 !important",
  },
}));

function Carousel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.tiles.map((tile, index) => tile)}
      </AutoPlaySwipeableViews>
      <div className={classes.dots}>
        {props.tiles.map((tile, i) => {
          return i == activeStep ? (
            <div className={classes.active} key={i} />
          ) : (
            <div key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;

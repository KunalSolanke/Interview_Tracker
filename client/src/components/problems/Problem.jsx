import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {addtoStarred} from '../../store/actions/dashoard'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom : "10px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    pointer : "cursor",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  }
}));

export default function Problem({problem}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const dashboard = useSelector(state=>state.dashboard)
  const [IsStarred,setIsStarred] = useState(false)
  const handleBookmark = async ()=>{
    setIsStarred((prev)=>!prev)
    await dispatch(addtoStarred(problem.url))
    console.log('starred becomes ',dashboard.starredQuestions)
  }
  useEffect(()=>{
    console.log(dashboard.starredQuestions)
    let condition = dashboard.starredQuestions.includes(problem?._id?.toString())
    //console.log(dashboard.starredQuestions,'and problem is ',problem._id.toString())
    if(condition){
      setIsStarred(true);
    }
    else{
      setIsStarred(false);
    }
  },[dashboard.starredQuestions])
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{problem?.title}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {problem.difficulty}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Description : 
              {problem?.description}
            </Typography>
          </div>
          <div className={classes.column}>
            {problem?.topics &&
              problem.topics?.map((topic) => {
                return (
                  <Chip
                    label={topic.title}
                    key={topic.title}
                    onDelete={() => {}}
                  />
                );
              })}
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Solve question here
              <br />
              <a href={problem?.link} className={classes.link}>
                Solve
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions style={{display:'flex',justifyContent:'space-between',cursor:'pointer'}} className={classes.bottomSection}>
         {
           (IsStarred)?<BookmarkIcon onClick={handleBookmark}/>:<BookmarkBorderIcon onClick={handleBookmark}/>
         }
          <Button size="small" color="primary">
            Solve
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
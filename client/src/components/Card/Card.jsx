import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css'
import { Link } from 'react-router-dom';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    backgroundColor:'#FFF3D3',
    minheight: '128px',
    color : "black",
    padding : "1rem 2rem",
    borderRadius:"10px"
  },
  title: {
    fontSize: 32,
    fontWeight : 700,
    "&>span" :{
      color : "#2272FF",
      fontSize: 34
    },
    marginBottom : ".3rem"
  },
  subtitle: {
    fontSize: 16,
  },
});

export default function SimpleCard({topic}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography className={classes.title}>
            <span>{topic.title.charAt(0)}</span>{topic.title.slice(1,topic.title.length)}
        </Typography>
        <Typography className={classes.subtitle} >
            Problems {topic.problems}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex",flexDirection:"row-reverse"}}>
        <Link to={`/practice/${topic.title}`} ><p style={{color :'#508DF9'}}>Click Here</p></Link>
      </CardActions>
    </Card>
  );
}


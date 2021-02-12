import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      margin: theme.spacing(1),
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius:'100%'
    },
        justifyContent:'center',
        alignItems:'center'
  },
}));

export default function Star({IsStarred,handleBookmark}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3} >
        {
          !IsStarred?(
            <StarBorderIcon onClick = {handleBookmark} fontSize='large' />
          ):(
            <StarIcon color='primary' onClick={handleBookmark} fontSize='large'/>
          )
        }
      </Paper>
    </div>
  );
}

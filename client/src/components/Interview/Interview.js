import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        marginBottom: "1rem",
    },
    paper:{
        padding: theme.spacing(2),
        margin: 'auto',
        [theme.breakpoints.down("650")]: {
            maxWidth: 500,
        },
        backgroundColor: '#F0F4FA',
    },
   
    bottom:{
        width:'97%',
        margin:'10px auto 10px auto',
    },
    image:{
        backgroundColor:'grey'
    },
    title:{
        fontSize:'25px',
        [theme.breakpoints.down("650")]: {
            fontSize: '20px'
        },
    },
    content:{
        fontSize:'18px',
        marginTop:'15px',
        [theme.breakpoints.down("650")]: {
            fontSize: '14px'
        },
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
    }
}));

function Interview({interview}) {
    const classes = useStyles()
    return (
        <Link to={`/interview/${interview._id}`}>
        <div className={classes.root}>
            

            <Paper className={classes.paper}>
                <Grid container spacing={4} className={classes.contianer}>
                    <Grid item md={4}>
                        <img className={classes.img} alt="complex" src={interview.image?.contentType} />
                    </Grid>
                    <Grid item xs={12} md={8} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <h1 className={classes.title}>
                                        {interview.title}
                                </h1>
                                <Typography className={classes.content}>
                                    {interview.description}
                                </Typography>                        
                                
                            </Grid>
                            <Grid item>
                                <div className={classes.bottom}>
                                    <pre><h1 align="center">likes 10    comments 24</h1></pre>
                                </div>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
        </Link>
    )
}

export default Interview

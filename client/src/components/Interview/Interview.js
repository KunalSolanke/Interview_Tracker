import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        width:'95%',
        backgroundColor:'#F0F4FA',
        marginTop:'30px',
        marginBottom:'50px',
        padding:'15px 25px 15px 15px',
        maxHeight:'400px'
    },
    top:{
        width:'97%',
        margin:'20px auto 10px auto',
        display:'flex',
        justifyContent:'space-between',
    },
    bottom:{
        width:'97%',
        margin:'10px auto 20px auto',
    },
    image:{
        width:'30%',
        marginRight:'45px',
        backgroundColor:'grey'
    },
    description:{
        width:'70%'
    },
    title:{
        fontSize:'30px'
    },
    content:{
        fontSize:'20px',
        marginTop:'15px'
    },
    img:{
        
    }
})

function Interview({interview}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.image}>
                    <img className={classes.img} src={interview.image.contentType}/>
                </div>
                <div className={classes.description}>
                    <h1 className={classes.title}>
                        {interview.title}
                    </h1>
                    <p className={classes.content}>
                     {interview.description}
                    </p>
                </div>
            </div>
            <div className={classes.bottom}>
                <pre><h1 align="center">likes 10      comments 24</h1></pre>
            </div>
        </div>
    )
}

export default Interview

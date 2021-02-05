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

function Interview() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.image}>
                    <img className={classes.img} src="https://heraldjournalism.com/wp-content/uploads/2020/03/a2dd8772-36d4-4df6-a704-c38c053ef222.jpg"/>
                </div>
                <div className={classes.description}>
                    <h1 className={classes.title}>
                        SDE profile interview at amazon
                    </h1>
                    <p className={classes.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </p>
                </div>
            </div>
            <div className={classes.bottom}>
                <pre><h1 align="center">likes 100       comments 24</h1></pre>
            </div>
        </div>
    )
}

export default Interview

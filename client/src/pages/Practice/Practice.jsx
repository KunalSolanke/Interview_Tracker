import React,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '../../components/Card/Card'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    ihead:{
        marginBottom : "3rem",
        "&>h1":{
        fontWeight : "700",
        fontSize : "28px",
        "&>span":{
            color : "#2272FF",
            fontSize :"40px"     
        },
    },
     "&>p":{
            width : "50%",
            minWidth : "400px"
        }
  },
  container :{
      maxWidth : "1500px",
      margin : "10px auto",
      padding : "10px",
  },
})
function Practice() {
    const classes = useStyles()  ;
    const [topics, settopics] = useState(["1","2","3","4"])
    return (
        <div className={classes.container}>
            <div className = {classes.ihead}>
                        <h1><span>P</span>ractice</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.
                        </p>
            </div>
            <div className ={classes.topics}>
                <Grid container spacing={100}> 
                    {
                        
                        topics.map(el=>{
                                return (<Grid item xs={12} sm={6} md={4} style={{marginBottom : "3rem"}}><Card topic="Arrays" problems={11} /></Grid>)
                        })
                    }
                 </Grid>
            </div>
        </div>
    )
}

export default Practice

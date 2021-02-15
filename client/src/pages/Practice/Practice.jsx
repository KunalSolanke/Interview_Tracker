import React,{useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '../../components/Card/Card'
import { Grid } from '@material-ui/core';
import {getTopics} from '../../store/actions/root'
import {useDispatch,useSelector} from 'react-redux' ;
import Loading from '../../components/Loading/Loading'

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
    const root = useSelector(state => state.root) ;
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getTopics())
    },[]) ;


    return (!root.loading?(
        <div className={classes.container}>
            <div className = {classes.ihead}>
                        <h1><span>IP</span>ractice</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.
                        </p>
            </div>
            <div className ={classes.topics}>
               
                <Grid container spacing={100}> 
                    {
                        root?.topics?.map(el=>{
                
                                return (<Grid item xs={12} sm={6} md={4} style={{marginBottom : "3rem"}}><Card topic={el}  /></Grid>)
                        })
                    }
                 </Grid>)
            </div>
        </div>):  <Loading/>
    )
}

export default Practice

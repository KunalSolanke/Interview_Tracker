import React,{useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '../../components/Card/Card'
import { Grid } from '@material-ui/core';
import {getComapnies} from '../../store/actions/root'
import {useDispatch,useSelector} from 'react-redux' ;
import Loading from '../../components/Loading/Loading'
import Company from '../../components/CompanyCard/CompanyCard'

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
function Companies() {
    const classes = useStyles();
    const root = useSelector(state => state.root) ;
    const dispatch = useDispatch()
    let companies = [1,2,3,4,5,6,7,8,9]
    useEffect(()=>{
      dispatch(getComapnies())
    },[]) ;
    return !root.loading?(
        <div className={classes.container}>
            <div className = {classes.ihead}>
                        <h1><span>IC</span>ompanies</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.
                        </p>
            </div>
            <div className ={classes.topics}>
                <Grid container spacing={100}> 
                    {
                        root.companies?.map(el=>{
                
                                return (<Grid item xs={12} sm={6} md={4} style={{marginBottom : "3rem"}}><Company img={el.logo?.contentType} name={el.name} description={el.description}  /></Grid>)
                        })
                    }
                 </Grid>
            </div>
        </div>
    ):<Loading/>
}

export default Companies

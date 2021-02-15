import React,{useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import {getInterviews} from '../../store/actions/root'
import {useDispatch,useSelector} from 'react-redux' ;
import Interview from "../../components/Interview/Interview";
import Loading from '../../components/Loading/Loading'

const useStyles = makeStyles((theme) => ({
    ihead:{
        marginBottom : "3rem",
        "&>h1":{
        fontWeight : "700",
        fontSize : "28px",
        "&>span":{
            color : "#2272FF",
            fontSize :"40px",
            [theme.breakpoints.down("650")]: {
              fontSize: "33px",
          }        
        },
        [theme.breakpoints.down("650")]: {
          fontSize: "21px",
        }
    },
     "&>p":{
            width : "50%",
            minWidth : "400px",
            [theme.breakpoints.down("650")]: {
              fontSize: "15px",
              minWidth: "100%",
            }
        },

      [theme.breakpoints.down("650")]: {
            marginBottom: "2.5rem",
            padding: "0 15px"
        }
  },
  container :{
      maxWidth : "1500px",
      margin : "10px auto",
      padding : "10px",
      [theme.breakpoints.down("650")]: {
        margin: 0,
        padding: "10px 1rem",
    }
  },
}));

function InterViewListPage() {
    const classes = useStyles()  ;
    const root = useSelector(state => state.root) ;
    const dispatch = useDispatch()
    useEffect(()=>{
      if(!root.interviews.length){
        dispatch(getInterviews())
      }
    },[]) ;


    return (!root.loading?(
      <div className={classes.container}>
        <div className={classes.ihead}>
          <h1>
            <span>I</span>Experiences
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an un.
          </p>
        </div>
        <div className={classes.interviews}>
          {root?.interviews && root?.interviews?.map((i) => <Interview interview={i} />)}
        </div>
      </div>):<Loading/>
    );
}

export default InterViewListPage

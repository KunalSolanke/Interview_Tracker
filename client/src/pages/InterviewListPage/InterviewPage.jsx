import React,{useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import {getInterviews} from '../../store/actions/root'
import {useDispatch,useSelector} from 'react-redux' ;
import Interview from "../../components/Interview/Interview";
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

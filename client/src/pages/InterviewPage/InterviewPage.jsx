import React,{useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ProfileLayout from '../../layouts/ProfileLayout'
import Interview from '../../components/Interview/Interview'
import {getInterviews} from '../../store/actions/dashoard'
import {useDispatch,useSelector} from 'react-redux'
import {withRouter,useParams} from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const useStyles = makeStyles({
    root:{
        width:'100%'
    },
    interviews:{
        width:'90%',
        paddingLeft:'35px',
        marginTop:'40px'
    },
    title:{
        fontSize:'30px'
    }
})

function InterviewPage({history}) {
    const classes = useStyles() ;
    const interviews = useSelector((state) => state.dashboard.interviews);
    const dashboard = useSelector(state=>state.dashboard)
    const dispatch = useDispatch();
    useEffect(()=>{
      if(interviews && interviews.length==0){
        (async()=>{
            await dispatch(getInterviews())
        })()
      }
    },[])
    return (
      <ProfileLayout>
        {!dashboard.loading?
        (<div className={classes.root}>
          <div className={classes.interviews}>
            <h1 className={classes.title}> My Interviews </h1>
            {interviews && interviews?.map((i) => <Interview interview={i} />)}
          </div>
        </div>):<Loading/>}
      </ProfileLayout>
    );
}

export default withRouter(InterviewPage)

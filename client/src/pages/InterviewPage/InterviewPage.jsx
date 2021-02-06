import React,{useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ProfileLayout from '../../layouts/ProfileLayout'
import Interview from '../../components/Interview/Interview'
import {getInterviews} from '../../store/actions/dashoard'
import {useDispatch,useSelector} from 'react-redux'

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

function InterviewPage() {
    const classes = useStyles() ;
    const interviews = useSelector((state) => state.dashboard.interviews);
    const dispatch = useDispatch();
    useEffect(()=>{
        (async()=>{
            await dispatch(getInterviews())
        })()
    },[])
    return (
      <ProfileLayout>
        <div className={classes.root}>
          <div className={classes.interviews}>
            <h1 className={classes.title}> My Interviews </h1>
            {interviews && interviews?.map((i) => <Interview interview={i} />)}
          </div>
        </div>
      </ProfileLayout>
    );
}

export default InterviewPage

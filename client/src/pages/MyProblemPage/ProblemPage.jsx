import React,{useEffect,useState} from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Problem from '../../components/problems/Problem.jsx';
import {useSelector,useDispatch} from 'react-redux' ;
import {getMyQuestions} from '../../store/actions/dashoard'
import {useParams} from 'react-router-dom'
import ProfileLayout from '../../layouts/ProfileLayout'
import {makeStyles} from '@material-ui/core/styles'
import Loading from '../../components/Loading/Loading'

const myStyles = makeStyles({
  root: {
    width: "85%",
  },
  container: {
    width: "60vw",
    margin: "2rem auto",
    minWidth: "400px",
  },
  title:{
     fontSize: "26px",
    fontWeight:500,
    marginBotton : "1rem"
  }
});

export default function ProblemPage() {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.dashboard.questions);
  const dashboard = useSelector((state) => state.dashboard);
  const classes = myStyles() ;

  useEffect(() => {
    dispatch(getMyQuestions());
  }, []);

  useDispatch(() => {}, [problems]);

  return (
    <ProfileLayout>
      {dashboard.loading ? (
        <Loading/>
      ) : (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.title}>Questions</div>
            {problems ? (
              problems.map((prob) => {
                return <Problem problem={prob} mine={true} />;
              })
            ) : (
              <h1>Add new Problems </h1>
            )}
          </div>
        </div>
      )}
    </ProfileLayout>
  );
}

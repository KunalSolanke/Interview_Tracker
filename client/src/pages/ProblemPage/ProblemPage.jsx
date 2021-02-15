import React,{useEffect,useState} from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Problem from '../../components/problems/Problem.jsx';
import {useSelector,useDispatch} from 'react-redux' ;
import {getTopicQuestions} from '../../store/actions/root'
import {useParams,useHistory} from 'react-router-dom'
import './ProblemPage.css'
import Loading from '../../components/Loading/Loading'
import {getStarred} from '../../store/actions/dashoard'

export default function ProblemPage() {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.root.questions);
  const root = useSelector((state) => state.root);
  const auth = useSelector((state) => state.auth);
  const dashboard = useSelector((state)=>state.dashboard)
  const { title } = useParams();
  const history = useHistory();
  useEffect(() => {
    if(!auth.token){
      history.push("/accounts/login")
    }
    dispatch(getTopicQuestions(title));
  }, []);
  
  useEffect(()=>{
    if(dashboard.starredQuestions.length==0){
      dispatch(getStarred())
    }
  },[])

  useDispatch(() => {}, [problems]);

  return (
    <div>
      <div className="top-container">
        <div className="list">
          <ol>
            <li className="listItem" style={{ color: "black" }}>
              Practice
            </li>
            <ChevronRightIcon className="chevron" fontSize="small" />
            <li className="listItem" style={{ color: "black" }}>
              {title}
            </li>
          </ol>
        </div>
        <div className="topic">
          <h2 className="topicName">
            <span>{title.charAt(0)}</span>
            {title.slice(1, title.length)}
          </h2>
        </div>
      </div>
      {!root.loading?
      (<div className="bot-container">
        <div className="content-box">
          <div className="content-list">
            {problems ? (
              problems.map((prob) => {
                return <Problem problem={prob} />;
              })
            ) : (
              <h1>Sorry But no problems for this topic right now</h1>
            )}
          </div>
          <div className="filter"></div>
        </div>
      </div>):
      <Loading></Loading>}
    </div>
  );
}

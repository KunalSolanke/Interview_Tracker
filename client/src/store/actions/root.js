import * as rootActions from "../constants/root.js";
import axios from "axios";

export const topicsRequest = () => {
  return {
    type: rootActions.TOPICS_REQUEST,
  };
};

export const topicsSuccess = (data) => {
  return {
    type: rootActions.TOPICS_SUCCESS,
    payload: data,
  };
};

export const requestFail = (data) => {
  return {
    type: rootActions.TOPICS_FAIL,
    payload: data,
  };
};

export const topicsGetQuestionsSuccess = (data) => {
  return {
    type: rootActions.TOPICS_GET_QUESTIONS_SUCCESS,
    payload: data,
  };
};

export const topicsGetQuestionsRequest = (data) => {
  return {
    type: rootActions.TOPICS_GET_QUESTIONS_REQUEST,
    payload: data,
  };
};

export const getInterviewsRequest = () => {
  return {
    type: rootActions.GETALL_INTERVIEW_REQUEST,
  };
};

export const getInterviewsSuccess = (data) => {
  return {
    type: rootActions.GETALL_INTERVIEW_SUCCESS,
    payload: data,
  };
};

export const getInterviewByIdRequest = () => {
  return {
    type: rootActions.GETCURR_INTERVIEW_REQUEST,
  };
};

export const getInterviewByIdSuccess = (data)=>{
  return {
    type: rootActions.GETCURR_INTERVIEW_SUCCESS,
    payload: data,
  }
}

export const getTopicQuestions = (title) => {
  return async (dispatch,getState) => {
    dispatch(topicsGetQuestionsRequest());
    try{
      const response = await axios
        .get(`http://localhost:3001/problems/topics/${title}`)
        dispatch(topicsGetQuestionsSuccess(response.data))
    }catch(err){
        console.log(err);
        dispatch(requestFail(err));
    }
  };
};

export const getTopics = () => {
  return (dispatch) => {
    dispatch(topicsRequest());
    axios
      .get(`http://localhost:3001/problems/topics/`)
      .then((response) => {
        console.log(response);
        dispatch(topicsSuccess(response.data.topic_list));
      })
      .catch((err) => {
        console.log(err);
        dispatch(requestFail(err));
      });
  };
};


export const getInterviews = ()=>{
        return async (dispatch,getState)=>{
            dispatch(getInterviewsRequest()) ;
            console.log('entering here')
            try{
            const response = await axios.get("http://localhost:3001/interviews/list")
            console.log('interviews res is ',response)
            dispatch(getInterviewsSuccess(response.data))
            }
            catch(err){
                console.log(err) ;
                dispatch(requestFail(err))
            }
}
}

export const getInterviewById = (interviewId)=>{
  return async (dispatch,getState)=>{
    console.log('berfore')
      dispatch(getInterviewByIdRequest()) ;
      console.log('entering here')
      // const token = localStorage.getItem("token")
      // if(!token){
      //     return ;
      // }
      try{
     // axios.defaults.headers["Authorization"]=`Token ${token}` ;
      console.log('going to make a request')
      const response = await axios.get("http://localhost:3001/interviews/"+interviewId)
      console.log('interview is ',response)
      dispatch(getInterviewByIdSuccess(response.data))
      }
      catch(err){
          console.log(err) ;
          dispatch(requestFail(err))
      }
  }
}
import * as dashboardActions from "../constants/dashboard.js";
import axios from "axios";






export const addQuestionRequest = () => {
  return {
    type: dashboardActions.ADD_QUESTION_REQUEST,
  };
};

export const addQuestionSuccess = (data) => {
  return {
    type: dashboardActions.ADD_QUESTION_SUCCESS,
    payload: data,
  };
};

export const getInterviewsRequest = () => {
  return {
    type: dashboardActions.GET_INTERVIEW_REQUEST,
  };
};

export const getInterviewsSuccess = (data) => {
  return {
    type: dashboardActions.GET_INTERVIEW_SUCCESS,
    payload: data,
  };
};

export const createInterviewRequest = () => {
  return {
    type: dashboardActions.CREATE_INTERVIEW_REQUEST,
  };
};

export const createInterviewSuccess = (data) => {
  return {
    type: dashboardActions.CREATE_INTERVIEW_SUCCESS,
    payload: data,
  };
};


export const requestFail = (data) => {
  return {
    type: dashboardActions.REQUEST_FAIL,
    payload: data,
  };
};

export const addQuestion = (data)=>{
    return async (dispatch,getState) =>{
            dispatch(addQuestionRequest()) ;
            console.log('entering here')
            const token = localStorage.getItem("token")
            if(!token){
                return ;
            }
            try{
            axios.defaults.headers["Authorization"]=`Token ${token}` ;
            
            const response = await axios.post("http://localhost:3001/problems/create",{
              title :data.get("title"),
              topics :data.get("topics"),
              url :data.get("url"),
              description :data.get("description"),
              difficulty :data.get("difficulty"),
            })
            dispatch(addQuestionSuccess(response.data))
            }
            catch(err){
                console.log(err) ;
                dispatch(requestFail(err))
            }
    }
}

export const getInterviews = ()=>{
        return async (dispatch,getState)=>{
            dispatch(getInterviewsRequest()) ;
            console.log('entering here')
            const token = localStorage.getItem("token")
            if(!token){
                return ;
            }
            try{
            axios.defaults.headers["Authorization"]=`Token ${token}` ;
            const response = await axios.get("http://localhost:3001/interviews/mine")
            console.log('interviews res is ',response)
            dispatch(getInterviewsSuccess(response.data))
            }
            catch(err){
                console.log(err) ;
                dispatch(requestFail(err))
            }
}
}


export const createInterview = (data)=>{
    return async (dispatch,getState) =>{
            dispatch(createInterviewRequest()) ;
            console.log('entering here')
            const token = localStorage.getItem("token")
            if(!token){
                return ;
            }
            try{
            axios.defaults.headers["Authorization"]=`Token ${token}` ;
            
            const response = await axios.post("http://localhost:3001/interviews/create",data)
            dispatch(createInterviewSuccess(response.data))
            }
            catch(err){
                console.log(err) ;
                dispatch(requestFail(err))
            }
    }
}

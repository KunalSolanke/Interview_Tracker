import * as actionTypes from '../constants/dashboard' ;
import { UpdatedObj } from '../UpdateObj' ;


const initialState = {
    error : null ,
    loading : false ,
    starred :[],
    interviews :[],
    questions :[],
    currentInterview : null
}


const addQuestionRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const addQuestionSuccess = (state,action) => {
    return UpdatedObj (state,{
        profile : action.payload,
        loading : false,
    })
}

const getInterViewRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const getInterViewSuccess = (state,action) => {
    return UpdatedObj (state,{
        interviews : action.payload,
        loading : false,
    })
}

const getQuestionsRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const getQuestionsSuccess = (state,action) => {
    return UpdatedObj (state,{
        questions : action.payload,
        loading : false,
    })
}


const createInterviewRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const createInteviewSuccess = (state,action) => {
    return UpdatedObj (state,{
        profile : action.payload,
        loading : false,
    })
}



const dashboardFail = (state,action) => {
    return UpdatedObj(state,{
        error : action.error,
        loading: false
    })
}




const reducer = (state = initialState, action) => {
    switch(action.type) {  
        case actionTypes.ADD_QUESTION_REQUEST: return addQuestionRequest(state,action)
        case actionTypes.ADD_QUESTION_SUCCESS : return addQuestionSuccess(state,action)
        case actionTypes.GET_INTERVIEW_REQUEST: return getInterViewRequest(state,action)
        case actionTypes.GET_INTERVIEW_SUCCESS : return getInterViewSuccess(state,action)
        case actionTypes.GETMY_QUESTIONS_REQUEST: return getQuestionsRequest(state,action)
        case actionTypes.GETMY_QUESTIONS_SUCCESS : return getQuestionsSuccess(state,action)
        case actionTypes.CREATE_INTERVIEW_REQUEST: return createInterviewRequest(state,action)
        case actionTypes.CREATE_INTERVIEW_SUCCESS : return createInteviewSuccess(state,action)
        case actionTypes.REQUEST_FAIL :return dashboardFail(state,action)
        default  : return state
    }
}

export default reducer ;
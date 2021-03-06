import * as actionTypes from '../constants/dashboard' ;
import { UpdatedObj } from '../UpdateObj' ;


const initialState = {
    error : null ,
    loading : false ,
    starred :[],
    interviews :[],
    questions :[],
    currentInterview : null,
    starredQuestions :[],
    starredInterviews :[],
}


const addQuestionRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const addQuestionSuccess = (state,action) => {
    return UpdatedObj (state,{
        questions : [action.payload,...state.questions],
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
        interviews : [action.payload,...state.interviews],
        loading : false,
    })
}

const addToStarredRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const addToStarredSuccess = (state,action) => {
    console.log('Am i entering here')
    return UpdatedObj (state,{
        starredQuestions:action.payload,
        loading : false,
    })
}

const getStarredRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const getStarredSuccess = (state,action) => {
    return UpdatedObj (state,{
        starredQuestions:action.payload,
        loading : false,
    })
}


const starredInterviewsRequest = (state,action) => {
    console.log('Didd')
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const starredInterviewsSuccess = (state,action) => {
    console.log('dodo')
    console.log('in reducer',action.payload)
    return UpdatedObj (state,{
        starredInterviews:action.payload,
        loading : false,
    })
}

const getStarredInterviewsRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const getStarredInterviewsSuccess = (state,action) => {
    return UpdatedObj (state,{
        starredInterviews:action.payload,
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
    console.log('acion type is ',action.type)
    switch(action.type) {  
        case actionTypes.ADD_QUESTION_REQUEST: return addQuestionRequest(state,action)
        case actionTypes.ADD_QUESTION_SUCCESS : return addQuestionSuccess(state,action)
        case actionTypes.GET_INTERVIEW_REQUEST: return getInterViewRequest(state,action)
        case actionTypes.GET_INTERVIEW_SUCCESS : return getInterViewSuccess(state,action)
        case actionTypes.GETMY_QUESTIONS_REQUEST: return getQuestionsRequest(state,action)
        case actionTypes.GETMY_QUESTIONS_SUCCESS : return getQuestionsSuccess(state,action)
        case actionTypes.CREATE_INTERVIEW_REQUEST: return createInterviewRequest(state,action)
        case actionTypes.CREATE_INTERVIEW_SUCCESS : return createInteviewSuccess(state,action)
        case actionTypes.ADD_TO_STARRED_REQUEST: return addToStarredRequest(state,action)
        case actionTypes.ADD_TO_STARRED_SUCCESS : return addToStarredSuccess(state,action)
        case actionTypes.GET_STARRED_REQUEST: return getStarredRequest(state,action)
        case actionTypes.GET_STARRED_SUCCESS : return getStarredSuccess(state,action)
        case actionTypes.STARRED_INTERVIEW_REQUEST: return starredInterviewsRequest(state,action)
        case actionTypes.STARRED_INTERVIEW_SUCCESS: ;return starredInterviewsSuccess(state,action)
        case actionTypes.GET_STARRED_INTERVIEW_REQUEST: return getStarredInterviewsRequest(state,action)
        case actionTypes.GET_STARRED_INTERVIEW_SUCCESS : return getStarredInterviewsSuccess(state,action)
        case actionTypes.REQUEST_FAIL :return dashboardFail(state,action)
        default  : return state
    }
}

export default reducer ;
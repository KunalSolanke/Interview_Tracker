import * as actionTypes from "../constants/root";
import { UpdatedObj } from "../UpdateObj";

const initialState = {
  error: null,
  questions: [],
  loading: false,
  topics: [],
  interviews : [],
  currInterview : null,
  comments : []
};

const topicsRequest = (state, action) => {
  return UpdatedObj(state, {
    error: null,
    loading: true,
  });
};

const topicsSuccess = (state, action) => {
  return UpdatedObj(state, {
    topics: action.payload,
    loading: false,
    error: null,
  });
};

const topicsFail = (state, action) => {
  return UpdatedObj(state, {
    error: action.error,
    loading: false,
  });
};

const topicsGetQuestionsRequest = (state, action) => {
  return UpdatedObj(state, {
    error: null,
    loading: true,
  });
};

const topicsGetQuestionsSuccess = (state, action) => {
  return UpdatedObj(state, {
    questions: action.payload,
    loading: false,
    error: null,
  });
};

const getInterViewRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const getInterViewSuccess = (state,action) => {
    return UpdatedObj (state,{
        interviews : action.payload,
        loading:false
    })
}

const getInterViewByIdRequest = (state,action) => {
    return UpdatedObj (state,{
        loading : true ,
        error : null ,
    })
}

const getInterViewByIdSuccess = (state,action) => {
    return UpdatedObj (state,{
        currInterview : action.payload,
        loading : false
    })
}


const getCommentRequest = (state,action) => {
  return UpdatedObj (state,{
      loading : true ,
      error : null ,
  })
}

const getCommentSuccess = (state,action) => {
  return UpdatedObj (state,{
      comments : action.payload,
      loading : false
  })
}

const createCommentRequest = (state,action) => {
  return UpdatedObj (state,{
      loading : true ,
      error : null ,
  })
}

const createCommentSuccess = (state,action) => {
  return UpdatedObj (state,{
      comments: [action.payload,...state.comments],
      loading : false,
  })
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOPICS_REQUEST:
      return topicsRequest(state, action);
    case actionTypes.TOPICS_SUCCESS:
      return topicsSuccess(state, action);
    case actionTypes.TOPICS_FAIL:
      return topicsFail(state, action);
    case actionTypes.TOPICS_GET_QUESTIONS_REQUEST:
      return topicsGetQuestionsRequest(state, action);
    case actionTypes.TOPICS_GET_QUESTIONS_SUCCESS:
      return topicsGetQuestionsSuccess(state, action);
    case actionTypes.GETALL_INTERVIEW_REQUEST: return getInterViewRequest(state,action)
    case actionTypes.GETALL_INTERVIEW_SUCCESS : return getInterViewSuccess(state,action)
    case actionTypes.GETCURR_INTERVIEW_REQUEST: return getInterViewByIdRequest(state,action)
    case actionTypes.GETCURR_INTERVIEW_SUCCESS : return getInterViewByIdSuccess(state,action)
    case actionTypes.GET_COMMENT_REQUEST: return getCommentRequest(state,action)
    case actionTypes.GET_COMMENT_SUCCESS : return getCommentSuccess(state,action)
    case actionTypes.POST_COMMENT_REQUEST: return createCommentRequest(state,action)
    case actionTypes.POST_COMMENT_SUCCESS : return createCommentSuccess(state,action)
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "../constants/topics";
import { UpdatedObj } from "../UpdateObj";

const initialState = {
  error: null,
  questions: [],
  loading: false,
  topics: [],
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
    default:
      return state;
  }
};

export default reducer;

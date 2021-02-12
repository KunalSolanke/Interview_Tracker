import * as dashboardActions from "../constants/dashboard.js";
import axios from "../../http/api";

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

export const getMyQuestionsRequest = () => {
  return {
    type: dashboardActions.GETMY_QUESTIONS_REQUEST,
  };
};

export const getMyQuestionsSuccess = (data) => {
  return {
    type: dashboardActions.GETMY_QUESTIONS_SUCCESS,
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

export const addToStarredRequest = () => {
  return {
    type: dashboardActions.ADD_TO_STARRED_REQUEST,
  };
};

export const addToStarredSuccess = (data) => {
  return {
    type: dashboardActions.ADD_TO_STARRED_SUCCESS,
    payload: data,
  };
};

export const getStarredRequest = () => {
  return {
    type: dashboardActions.GET_STARRED_REQUEST,
  };
};

export const getStarredSuccess = (data) => {
  return {
    type: dashboardActions.GET_STARRED_SUCCESS,
    payload: data,
  };
};

export const starredInterviewsRequest = () => {
  return {
    type: dashboardActions.STARRED_INTERVIEW_REQUEST,
  };
};

export const starredInterviewsSuccess = (data) => {
  return {
    type: dashboardActions.STARRED_INTERVIEW_SUCCESS,
    payload: data,
  };
};

export const getStarredInterviewsRequest = () => {
  return {
    type: dashboardActions.GET_STARRED_INTERVIEW_REQUEST,
  };
};

export const getStarredInterviewsSuccess = (data) => {
  return {
    type: dashboardActions.GET_STARRED_INTERVIEW_SUCCESS,
    payload: data,
  };
};

export const addtoStarred = (link, check = false) => {
  return async (dispatch, getState) => {
    dispatch(addToStarredRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      console.log(link);
      const response = await axios.post(`/accounts/profile/starred`, {
        link,
        check,
      });
      dispatch(addToStarredSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

export const getStarred = () => {
  return async (dispatch, getState) => {
    dispatch(getStarredRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      const response = await axios.get(`/accounts/profile/starred`);
      dispatch(getStarredSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

export const starredInterviews = (pk, check = false) => {
  return async (dispatch, getState) => {
    dispatch(starredInterviewsRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      console.log(pk);
      const response = await axios.post(`/accounts/profile/starredInterviews`, {
        pk,
        check,
      });
      console.log("data is ", response.data);
      dispatch(starredInterviewsSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

export const getStarredInterviews = () => {
  return async (dispatch, getState) => {
    dispatch(getStarredInterviewsRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      const response = await axios.get(`/accounts/profile/starredInterviews`);
      console.log("data is ", response.data);
      dispatch(getStarredInterviewsSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

export const addQuestion = (data) => {
  return async (dispatch, getState) => {
    dispatch(addQuestionRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;

      const response = await axios.post(`/problems/create`, {
        title: data.get("title"),
        topics: data.get("topics"),
        url: data.get("url"),
        description: data.get("description"),
        difficulty: data.get("difficulty"),
      });
      dispatch(addQuestionSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

export const getInterviews = () => {
  return async (dispatch, getState) => {
    dispatch(getInterviewsRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      const response = await axios.get(`/accounts/profile/interviews`);
      console.log("interviews res is ", response);
      dispatch(getInterviewsSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

export const getMyQuestions = () => {
  return async (dispatch, getState) => {
    dispatch(getMyQuestionsRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;
      const response = await axios.get(`/accounts/profile/questions`);
      console.log("interviews res is ", response);
      dispatch(getMyQuestionsSuccess(response.data));
    } catch (err) {
      console.log(err.message);
      dispatch(requestFail(err));
    }
  };
};

export const createInterview = (data) => {
  return async (dispatch, getState) => {
    dispatch(createInterviewRequest());
    console.log("entering here");
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    try {
      axios.defaults.headers["Authorization"] = `Token ${token}`;

      const response = await axios.post(`${baseUrl}/interviews/create`, data);
      dispatch(createInterviewSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(requestFail(err));
    }
  };
};

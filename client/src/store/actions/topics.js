import * as topicsActions from "../constants/topics.js";
import axios from "axios";

export const topicsRequest = () => {
  return {
    type: topicsActions.TOPICS_REQUEST,
  };
};

export const topicsSuccess = (data) => {
  return {
    type: topicsActions.TOPICS_SUCCESS,
    payload: data,
  };
};

export const topicsFail = (data) => {
  return {
    type: topicsActions.TOPICS_FAIL,
    payload: data,
  };
};

export const topicsGetQuestionsSuccess = (data) => {
  return {
    type: topicsActions.TOPICS_GET_QUESTIONS_SUCCESS,
    payload: data,
  };
};

export const topicsGetQuestions = (data) => {
  return {
    type: topicsActions.TOPICS_GET_QUESTIONS_REQUEST,
    payload: data,
  };
};

export const getTopicQuestions = ({ title }) => {
  return (dispatch) => {
    dispatch(topicsRequest());
    axios
      .get(`http://localhost:3001/problems/topics/${title}`)
      .then((response) => {
        dispatch(topicsGetQuestionsSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(topicsFail(err));
      });
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
        dispatch(topicsFail(err));
      });
  };
};

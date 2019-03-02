import { GET_FEEDBACK_LIST, GET_FEEDBACK_LIST_ERROR, SET_FEEDBACK_LIST } from '../constants';

export function getFeedBack(page, limit) {
  return {
    type: GET_FEEDBACK_LIST,
    page,
    limit
  };
}

export function setFeedBack(feedback, total) {
  return {
    type: SET_FEEDBACK_LIST,
    feedback,
    total
  };
}

export function getFeedBackError(error) {
  return {
    type: GET_FEEDBACK_LIST_ERROR,
    error
  };
}
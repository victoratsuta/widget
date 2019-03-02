import {GET_FEEDBACK_LIST, GET_FEEDBACK_LIST_ERROR, SET_FEEDBACK_LIST} from '../constants';

const initialState = { feedback: [], loading : false, error : null };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDBACK_LIST:
      return {
        ...state,
        loading : true,
        error : null,
      };
    case SET_FEEDBACK_LIST:
      return {
        ...state,
        loading : false,
        feedback: state.feedback.concat(action.feedback),
        total : action.total,
        error : null,
      };
    case GET_FEEDBACK_LIST_ERROR:
      return {
        ...state,
        loading : false,
        error: action.error
      };
    default:
      return state;
  }
}

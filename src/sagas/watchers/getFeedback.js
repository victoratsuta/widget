import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_FEEDBACK_LIST } from '../../constants';
import {getFeedBackError, setFeedBack} from '../../actions';
import { getFeedback } from '../../lib/api';

function* workerGetFeedbackSaga(action) {
  try{
    const feedback = yield call(getFeedback, action.page, action.limit);
    yield put(setFeedBack(feedback.data, feedback.headers['x-total-count']));
  } catch (e){
    console.error(e)
    yield put(getFeedBackError(e));
  }
}

export default function* watchGetUsersSaga() {
  yield takeLatest(GET_FEEDBACK_LIST, workerGetFeedbackSaga);
}

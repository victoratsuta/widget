import { all, fork } from 'redux-saga/effects';

import watchGetFeedbackSaga from './watchers/getFeedback';

export default function* root() {
  yield all([
    fork(watchGetFeedbackSaga),
  ]);
}

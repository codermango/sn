import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_RENTAL_CONTENT } from './constants';
import { fetchRentalContentSuccess, fetchRentalContentError } from './actions';

import request from 'utils/request';


export function* getRentalContent() {
  const requestURL = `http://localhost:3011/api/rentalInfo/list`;

  try {
    const data = yield call(request, requestURL);
    yield put(fetchRentalContentSuccess(data));
  } catch (err) {
    yield put(fetchRentalContentError(err));
  }
}


export default function* rentals() {
  yield takeLatest(FETCH_RENTAL_CONTENT, getRentalContent);
}

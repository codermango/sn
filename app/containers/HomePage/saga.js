import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL_RENTALS } from './constants';
import { fetchAllRentalsSuccess, fetchAllRentalsError } from './actions';

import request from 'utils/request';


export function* getAllRentals() {
  const requestURL = `http://localhost:3011/api/rentalInfo/list`;

  try {
    const data = yield call(request, requestURL);
    yield put(fetchAllRentalsSuccess(data));
  } catch (err) {
    yield put(fetchAllRentalsError(err));
  }
}


export default function* rentals() {
  yield takeLatest(FETCH_ALL_RENTALS, getAllRentals);
}

import {
  FETCH_ALL_RENTALS,
  FETCH_ALL_RENTALS_SUCCESS,
  FETCH_ALL_RENTALS_ERROR
} from './constants';


export function fetchAllRentals() {
  return {
    type: FETCH_ALL_RENTALS
  };
}

export function fetchAllRentalsSuccess(data) {
  return {
    type: FETCH_ALL_RENTALS_SUCCESS,
    data
  };
}

export function fetchAllRentalsError(error) {
  return {
    type: FETCH_ALL_RENTALS_ERROR,
    error
  };
}

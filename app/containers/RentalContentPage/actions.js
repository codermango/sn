import {
  FETCH_RENTAL_CONTENT,
  FETCH_RENTAL_CONTENT_SUCCESS,
  FETCH_RENTAL_CONTENT_ERROR
} from './constants';


export function fetchRentalContent() {
  return {
    type: FETCH_RENTAL_CONTENT
  };
}

export function fetchRentalContentSuccess(data) {
  return {
    type: FETCH_RENTAL_CONTENT_SUCCESS,
    data
  };
}

export function fetchRentalContentError(error) {
  return {
    type: FETCH_RENTAL_CONTENT_ERROR,
    error
  };
}

import {
  FETCH_ALL_RENTALS,
  FETCH_ALL_RENTALS_SUCCESS,
  FETCH_ALL_RENTALS_ERROR
} from './constants';


const initialState = {
  loading: false,
  error: false,
  rentals: false
};

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_RENTALS:
      return {
        loading: true,
        error: false,
        rentals: false,
      };
    case FETCH_ALL_RENTALS_SUCCESS:
      return {
        loading: false,
        error: false,
        rentals: action.data
      };
    case FETCH_ALL_RENTALS_ERROR:
      return {
        loading: false,
        error: action.error,
        rentals: false
      }
    default:
      return state;
  }
}

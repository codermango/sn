import {
  FETCH_RENTAL_CONTENT,
  FETCH_RENTAL_CONTENT_SUCCESS,
  FETCH_RENTAL_CONTENT_ERROR
} from './constants';


const initialState = {
  loading: false,
  error: false,
  data: false
};

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RENTAL_CONTENT:
      return {
        loading: true,
        error: false,
        data: false,
      };
    case FETCH_RENTAL_CONTENT_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.data
      };
    case FETCH_RENTAL_CONTENT_ERROR:
      return {
        loading: false,
        error: action.error,
        data: false
      }
    default:
      return state;
  }
}

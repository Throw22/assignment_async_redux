import * as Actions from "./actions";

const initialState = {
  results: [],
  isFetching: false,
  error: null
};

export function booksApp(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        results: action.data,
        isFetching: false
      };
    case Actions.GET_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

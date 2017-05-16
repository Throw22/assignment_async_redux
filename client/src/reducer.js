import * as Actions from './actions';

const initialState = {
  results: [],
  isFetching: false,
  error: null,
  description: 'Select a book to see description'
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
    case Actions.SELECT_BOOK_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        description: action.data
      };
    case Actions.SELECT_BOOK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

// export const SELECT_BOOK_SUCCESS = "SELECT_BOOK_SUCCESS";
// export const SELECT_BOOK_FAILURE = "SELECT_BOOK_FAILURE";

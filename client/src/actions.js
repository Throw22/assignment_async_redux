export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";
export const SELECT_BOOK_SUCCESS = "SELECT_BOOK_SUCCESS";
export const SELECT_BOOK_FAILURE = "SELECT_BOOK_FAILURE";

export function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST
  };
}

export function getBooksSuccess(data) {
  return {
    type: GET_BOOKS_SUCCESS,
    data
  };
}

export function getBooksFailure(error) {
  return {
    type: GET_BOOKS_FAILURE,
    error
  };
}

export function selectBookSuccess(data) {
  return {
    type: SELECT_BOOK_SUCCESS,
    data
  };
}

export function selectBookFailure(error) {
  return {
    type: SELECT_BOOK_FAILURE,
    error
  };
}

export function getBooks(query, type) {
  return dispatch => {
    fetch(`/api/search/${type}/${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.statusText}: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        dispatch(getBooksSuccess(json));
      })
      .catch(err => {
        console.log("Error:", err);
        dispatch(getBooksFailure(err));
      });
  };
}

export function selectBook(id) {
  return dispatch => {
    dispatch(getBooksRequest());
    fetch(`/api/search/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.statusText}: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        dispatch(selectBookSuccess(json));
      })
      .catch(err => {
        console.log("Error:", err);
        dispatch(getBooksFailure(err));
      });
  };
}

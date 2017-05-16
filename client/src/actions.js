export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export function setSearchType(data) {
  return {
    type: SET_SEARCH_TYPE,
    data
  };
}

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

export function getBooksByAuthor(query) {
  return dispatch => {
    dispatch(getBooksRequest());
    fetch(`/api/search/author/${query}`)
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
        dispatch(getBooksFailure(err));
      });
  };
}

export function getBooksByTitle(query) {
  return dispatch => {
    dispatch(getBooksRequest());
    fetch(`/api/search/title/${query}`)
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
        dispatch(getBooksFailure(err));
      });
  };
}

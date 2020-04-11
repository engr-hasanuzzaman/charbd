import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorSuccess(authors) {
  return {
    type: types.LOAD_AUTHOR_SUCCESS,
    authors
  };
}

// thunk function
export function loadAuthor() {
  return function(dispatch) {
    return authorApi.getAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors))
      })
      .catch(err => {
        throw err;
      })
  };
}
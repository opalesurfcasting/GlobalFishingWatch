import { GET_SEARCH_RESULTS } from 'actions';
import 'whatwg-fetch';

let searchQueryID = 0;

export function getSearchResults(searchTerm) {
  return (dispatch, getState) => {
    const state = getState();

    // If the user is not logged in or the keyword is less than 3 characters,
    // we reset the list of results to be empty
    if (!state.user.token || searchTerm.length < 3) {
      dispatch({
        type: GET_SEARCH_RESULTS,
        payload: {
          entries: [],
          count: 0
        }
      });
      return;
    }

    // ID of the current request
    const queryID = ++searchQueryID;
    const options = {
      method: 'GET'
    };
    if (state.user.token) {
      options.headers = {
        Authorization: `Bearer ${state.user.token}`
      };
    }
    fetch(`${state.map.tilesetUrl}/search/?query=${searchTerm}`, options)
      .then(response => response.json())
      .then((result) => {
        // We ensure to only show the results of the last request
        if (queryID !== searchQueryID) return;

        dispatch({
          type: GET_SEARCH_RESULTS,
          payload: {
            entries: result.entries,
            count: result.total
          }
        });
      });
  };
}

export { getSearchResults as default };

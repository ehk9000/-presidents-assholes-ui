import { setPresidents, isLoading, setError } from '../actions';

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const presidents = await response.json();
      dispatch(setPresidents(presidents));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}
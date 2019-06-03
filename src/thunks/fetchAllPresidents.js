import { setPresidents, isLoading, setError } from '../actions';

export const fetchPresidents = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);

      if(!response.ok) {
        throw Error(response.statusText);
      }
      const presidents = response.json();
      
      dispatch(isLoading(false));
      dispatch(setPresidents(presidents));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}
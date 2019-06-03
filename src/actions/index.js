export const getAllPresidents = (presidents) => ({
  type: 'GET_ALL_PRESIDENTS',
  presidents
});

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});
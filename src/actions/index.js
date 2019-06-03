export const getAllPresidents = (presidents) => ({
  type: 'GET_ALL_PRESIDENTS',
  presidents
});

export const isLoading = (bool) => ({
  type: 'SET_IS_LOADING',
  isLoading: bool
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});
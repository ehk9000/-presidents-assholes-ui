export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
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
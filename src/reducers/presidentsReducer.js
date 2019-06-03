export const presidentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_PRESIDENTS':
      return action.presidents
    default:
      return state
  }
}
const UserComparisonResultsReducer = (
  state = {
    resultsArray: [],
  },
  action,
) => {
  switch (action.type) {
    case 'addResults':
      return {
        resultsArray: [...state.resultsArray, ...action.results],
      };
    default:
      return state;
  }
}

export default UserComparisonResultsReducer;

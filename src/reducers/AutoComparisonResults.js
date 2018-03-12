const AutoComparisonResultsReducer = (
  state = {
    resultsArray: [],
  },
  action,
) => {
  switch (action.type) {
    case 'addAutoResults':
      return {
        resultsArray: [...state.resultsArray, ...action.results],
      };
    default:
      return state;
  }
}

export default AutoComparisonResultsReducer;

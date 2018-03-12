import { combineReducers } from 'redux';
import UserComparisonResultsReducer from './UserComparisonResults';
import AutoComparisonResultsReducer from './AutoComparisonResults';


const RootReducer = combineReducers({
  UserComparisonResults: UserComparisonResultsReducer,
  AutoComparisonResults: AutoComparisonResultsReducer,
});

export default RootReducer;

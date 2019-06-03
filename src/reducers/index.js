import { combineReducers } from 'redux';
import { presidentsReducer } from './presidentsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { setErrorReducer } from './setErrorReducer';


const rootReducer = combineReducers({
  presidents: presidentsReducer,
  isLoading: isLoadingReducer,
  error: setErrorReducer
});

export default rootReducer;
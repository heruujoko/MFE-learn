import { combineReducers } from 'redux';
import catalogReducer from './catalog/catalog-reducers';
const reducers = combineReducers({
  catalog: catalogReducer,
})

export default reducers;
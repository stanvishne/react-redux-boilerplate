import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import modal from './modal';
import login from './login';


// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({}),
  login,
  modal
});

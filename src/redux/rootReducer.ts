import {combineReducers} from 'redux';

//For Not Getting Error:: Store is Empty
const authReducer = () => {};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

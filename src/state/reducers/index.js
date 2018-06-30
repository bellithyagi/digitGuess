import { combineReducers } from 'redux';
import RegisterReducer from './register.reducer';

export default combineReducers({
    register: RegisterReducer,
});
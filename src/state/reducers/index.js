import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import RegisterReducer from './register.reducer';

export default combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
});
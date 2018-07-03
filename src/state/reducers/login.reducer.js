import { ACTION_CHECK_USER_EMAIL, ACTION_CHECK_USER_PASSWORD } from '../actions/constants';

const initialState = {
    matchUserEmail: '',
    matchUserPassword: '',
}

export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_CHECK_USER_EMAIL:
          return { ...state, matchUserEmail: action.payload };
        case ACTION_CHECK_USER_PASSWORD:
          return { ...state, matchUserPassword: action.payload };
        default:
          return state;
    }
}
import { ACTION_STORE_USER_EMAIL, ACTION_STORE_USER_PASSWORD } from '../actions/constants';

const initialState = {
    userEmail: '',
    password: '',
}

export default function RegisterReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_STORE_USER_EMAIL:
          return { ...state, userEmail: action.payload }
        case ACTION_STORE_USER_PASSWORD:
          return{ ...state, password: action.payload }
        default:
        return state;
    }
}
import { ACTION_STORE_USER_EMAIL, ACTION_STORE_USER_PASSWORD } from './constants';

export const getEmail = userEmail => ({
    type: ACTION_STORE_USER_EMAIL,
    payload: userEmail,
})

export const getPassword = password => ({
    type: ACTION_STORE_USER_PASSWORD,
    payload: password,
})
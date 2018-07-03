import { ACTION_CHECK_USER_EMAIL, ACTION_CHECK_USER_PASSWORD } from './constants';

export const checkEmail = value => ({
    type: ACTION_CHECK_USER_EMAIL,
    payload: value,
})

export const checkPassword = value => ({
    type: ACTION_CHECK_USER_PASSWORD,
    payload: value,
})
export const LOGIN_USER = 'LOGIN_USER';

export const loginAction = (fullName) => ({
    type: LOGIN_USER,
    payload: fullName
})
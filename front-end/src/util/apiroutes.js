export const server = 'http://localhost:5000' 

export const SIGNUP_ROUTE = `${server}/api/userauth/signup`
export const LOGIN_ROUTE = `${server}/api/userauth/login`;
export const SET_AVATAR_ROUTE = `${server}/api/userauth/setAvatar`;
export const GET_USERS_ROUTE = `${server}/api/data/getallusers`;
export const STORE_MESSAGE_ROUTE = `${server}/api/messages/addMessage`;
export const GET_CURRENT_USERS_MESSAGES = `${server}/api/messages/getallmessages`;
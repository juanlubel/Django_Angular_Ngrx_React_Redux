import {
    LOGIN
} from "../constants/actionTypes";


export default (state = {token: ''}, action) => {
    console.log('REDUCER', action)
    switch (action.type) {
        case 'test':
            return {
                ...state,
                test: action.payload
            };
        case LOGIN:
        case 'REGISTER':
            return {
                ...state,
                redirectTo: action.error ? null : '/',
                token: action.error ? null : action.payload.token,
                currentUser: action.error ? null : action.payload.user
            };
        default:
            return state

    }
}

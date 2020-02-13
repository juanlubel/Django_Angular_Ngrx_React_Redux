import {
    LOGIN
} from "../constants/actionTypes";


export default (state = {token: ''}, action) => {
    switch (action.type) {
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

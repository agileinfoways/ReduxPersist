import { TYPE_SAVE_USER_DATA, TYPE_TOKEN_DATA } from "../action/UserAction";


const initialState = {
    userData: {},
    token: ""
}

export function userReducer(state = initialState, action) {

    switch (action.type) {
        case TYPE_SAVE_USER_DATA:
            return Object.assign({}, state, {
                userData: action.value
            })
        case TYPE_TOKEN_DATA:
            return Object.assign({}, state, {
                token: action.value
            })
        default:
            return state
    }

}
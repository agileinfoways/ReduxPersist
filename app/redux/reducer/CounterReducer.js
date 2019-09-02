import { TYPE_INCREMENT_COUNTER, TYPE_DECREMENT_COUNTER } from "../action/CounterAction";


const initialState = {
    counter: 0
}

export function counterReducer(state = initialState, action) {

    switch (action.type) {
        case TYPE_INCREMENT_COUNTER:
            return Object.assign({}, state, {
                counter: action.value
            })
        case TYPE_DECREMENT_COUNTER:
            return Object.assign({}, state, {
                counter: action.value
            })
        default:
            return state
    }

}
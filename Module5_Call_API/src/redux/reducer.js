import {combineReducers} from "redux";

const reducerAccount = (state = {
    username: "",
    role: ""
}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...action.payload
            }
        case "LOGOUT":
            return {
                username: "",
                role: ""
            }
        default:
            return state;
    }
}
const reducerCart = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                action.payload
            ]
        case "REMOVE":
            return []
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    account : reducerAccount,
    cart: reducerCart,
})
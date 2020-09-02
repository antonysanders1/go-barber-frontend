export default function customerReducer(state = { customer: {}, loggedIn: false }, action) {
    switch (action.type) {
        case 'LOGIN_CUSTOMER':
            return { customer: action.payload, loggedIn: true }


        default:
            return state

    }


}
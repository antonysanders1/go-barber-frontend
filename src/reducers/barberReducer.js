export default function barberReducer(state = { barber: {}, loggedIn: false, error: "" }, action) {
    switch (action.type) {
        case 'LOGIN_BARBER':
            return { barber: action.payload, loggedIn: true }

        case 'LOGIN_ERROR':
            return {...state, loginError: action.error}

        default:
            return state

    }


}
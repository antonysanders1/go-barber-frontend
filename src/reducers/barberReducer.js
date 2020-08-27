export default function barberReducer(state = { barber: [] }, action) {
    switch (action.type) {
        case 'FETCH_BARBERS':
            return {barber: action.payload}
    
        default:
            return state
          
    }


}
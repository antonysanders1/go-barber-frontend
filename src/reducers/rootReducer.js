import { combineReducers } from 'redux';
import barberReducer from './barberReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
    barber: barberReducer,
    customer: customerReducer
})

export default rootReducer;
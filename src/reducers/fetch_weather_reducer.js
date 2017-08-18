import { FETCH_WEATHER } from '../actions/fetchWeather_action';


//state argument is not application state, it is the state for this reducer
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log([action.payload.data  , ...state]);
            // return state.concat([action.payload.data])
            return [action.payload.data  , ...state]
    default:
        return state;
    }
    
}


import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    console.log('Action received', action);

    switch(action.type){
        case FETCH_WEATHER:
            //state = [ action.payload.data ]
            // console.log('State before concat', state);
            return state.concat([ action.payload.data ]);
            //return [ action.payload.data, ...state];
            // console.log('State after concat', state);
    }

    return state;
}
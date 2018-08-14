import { FETCH_WEATHER, REMOVE_CITY } from '../actions/index';

export default function(state = [], action){
    // console.log('Action received', action);
    if(action.error){
        alert("city does not exist");
        return state;
    }

    switch(action.type){
        case FETCH_WEATHER:
            // console.log('State now', state.concat([ action.payload.data ]));
            return state.concat([ action.payload.data ]);
            //return [ action.payload.data, ...state];
            // console.log('State after concat', state);

        case REMOVE_CITY:
            return state.filter(cityData=>{return cityData.city.id !== action.payload});
    }

    return state;
}
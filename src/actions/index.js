//fetch weather action
import axios from 'axios';

const API_KEY = '92117fb81fa0f27f08991bf945b8133c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(place){
    const url = `${ROOT_URL}&q=${place}`;
    const request = axios.get(url);
    // console.log('Request:', request);

    return{
        type: FETCH_WEATHER,
        payload: request,
    };
}


//remove city action
export const REMOVE_CITY = 'REMOVE_CITY';
export function removeCity(id){
    // alert(name);
    // console.log(name);
    return{
        type: REMOVE_CITY,
        payload: id,
    };
}
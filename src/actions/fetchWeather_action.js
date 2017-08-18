import axios from 'axios';

const API_KEY = 'df3ec8ca157b3afcdfbec8c5d72efb0f';

// straightfowards JS way
// const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

// ES6 way 
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}


// making the request 
// we need to create an action creator to make the API request

// separating out this const will limit bugs from types
// import the variable in the reducers, this helps VSCODE
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
    
    // this request is a promise that is passed in as the payload
    const request = axios.get(url);
    console.log(request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
        // we are returning the PROMISE as the PAYLOAD
        // 

    }
}
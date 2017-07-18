import axios from 'axios';

const API_Key = '554b555b1e325baef181438f7dbb1edc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export const searchBtnClick = txtSearch => {

  let url = `${ROOT_URL}&q=${txtSearch},us&units=imperial`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

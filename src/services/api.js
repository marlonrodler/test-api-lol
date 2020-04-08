import axios from 'axios';

const api = axios.create({ baseURL: `https://cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/summoner/v4/summoners` });

export default api;
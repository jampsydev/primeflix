import axios from 'axios';



// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=632d9e4d769bc667f081f90a933dba1b&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;
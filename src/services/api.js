import axios from 'axios'

//Base URL:https://api.themoviedb.org/3/
//API URL:/movie/now_playing?api_key=c675d03d9d4695c83b6198fcca873868&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
}

)

export default api

import axios from 'axios'

const API_KEY = '1af1e0e33f2f52b98c691eb0f6ce91f5'
const API_URL = 'https://api.themoviedb.org/3/'

axios.defaults.baseURL = API_URL

export const fetchTrendingMovies = async () => {
    const response = await axios.get('trending/movie/day', {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data.results
}

export const fetchMovieDetailsWithId = async (id) => {
    const response = await axios.get('movie/' + id, {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data
}

export const fetchMoviesWithQuery = async (query) => {
    const response = await axios.get('search/movie', {
        params: {
            api_key: API_KEY,
            query: query,
        },
    })

    return response.data.results
}

export const fetchMovieCast = async (id) => {
    const response = await axios.get('movie/' + id + '/credits', {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data.cast
}

export const fetchMovieReviews = async (id) => {
    const response = await axios.get('movie/' + id + '/reviews', {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data.results
}

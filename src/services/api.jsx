import axios from 'axios'


const API_KEY = '1af1e0e33f2f52b98c691eb0f6ce91f5'

const API_URL = 'https://api.themoviedb.org/3/'


export const fetchTrendingMovies = async () => {
    const response = await axios.get(API_URL + 'trending/movie/day', {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data.results
}

export const fetchMovieDetailsWithId = async (id) => {
    const response = await axios.get(API_URL + 'movie/' + id, {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data
}

export const fetchMoviesWithQuery = async (query) => {
    const response = await axios.get(API_URL + 'search/movie', {
        params: {
            api_key: API_KEY,
            query: query,
        },
    })

    return response.data.results
}

export const fetchMovieCast = async (id) => {
    const response = await axios.get(API_URL + 'movie/' + id + '/credits', {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data.cast
}

export const fetchMovieReviews = async (id) => {
    const response = await axios.get(API_URL + 'movie/' + id + '/reviews', {
        params: {
            api_key: API_KEY,
        },
    })

    return response.data.results
}

// const API_PATHS = {
//     trendingMovies: 'trending/movie/day',
//     searchMovie: 'search/movie',
//     movieDetails: 'movie',
//     movieCast: 'credits',
//     movieReviews: 'reviews',
// }

// export const fetchData = async (path) => {
//     try {
//         const response = await axios.get(`${BASE_URL}` + path, {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: 'Bearer ' + API_KEY,
//             },
//         })
//         if (response.status === 200) {
//             return response.data
//         }
//     } catch (error) {
//         console.error('An error occurred while fetching data:', error)
//     }
// }

// export const getTrendingMovies = async () => {
//     const movies = await fetchData(`${API_PATHS.trendingMovies}`)
//     return movies.results
// }

// export const getMoviesByQuery = async (query) => {
//     const movies = await fetchData(`${API_PATHS.searchMovie}?query=${query}`)
//     return movies.results
// }

// export const getMovieDetails = async (movieId) => {
//     const movie = await fetchData(`${API_PATHS.movieDetails}/${movieId}`)

//     if (movie.poster_path) {
//         movie.poster_path = `http://image.tmdb.org/t/p/w300${movie.poster_path}`
//     }

//     return movie
// }

// export const getMovieCast = async (movieId) => {
//     const cast = await fetchData(
//         `${API_PATHS.movieDetails}/${movieId}/${API_PATHS.movieCast}`
//     )

//     return cast.cast.map((cast) => {
//         if (cast.profile_path) {
//             cast.profile_path = `http://image.tmdb.org/t/p/w200${cast.profile_path}`
//         }

//         return cast
//     })
// }

// export const getMovieReviews = async (movieId) => {
//     const reviews = await fetchData(
//         `${API_PATHS.movieDetails}/${movieId}/${API_PATHS.movieReviews}`
//     )

//     return reviews.results.map((review) => {
//         if (review.author_details.avatar_path) {
//             review.author_details.avatar_path = `http://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
//         }
//         return review
//     })
// }

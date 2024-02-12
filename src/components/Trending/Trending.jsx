import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchTrendingMovies } from 'services'
import css from './Trending.module.css'

export const Trending = () => {
    const location = useLocation()

    const [trending, setTrending] = useState([])

    useEffect(() => {
        const asyncFunction = async () => {
            try {
                setTrending(await fetchTrendingMovies())
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        asyncFunction()
    }, [])

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {trending.map((tr) => (
                    <Link to={`movies/${tr.id}`} state={{ from: location }}>
                        <TrendingListItem className={css.trending}>
                            {tr.title}
                        </TrendingListItem>
                    </Link>
                ))}
            </ul>
        </>
    )
}

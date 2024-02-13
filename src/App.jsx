import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import { Home } from './pages';
import { lazy } from 'react';

const Cast = lazy(() => import('./components/Cast/Cast.jsx'))
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'))
const Movies = lazy(() => import('./pages/Movies/Movies.jsx'))
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails.jsx'))

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />

                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
            </Route>
        </Routes>
    )
}

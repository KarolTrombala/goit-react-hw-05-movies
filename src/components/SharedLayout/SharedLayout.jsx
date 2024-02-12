import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
    return (
        <Container className={css.container}>
            <Header className={css.header}>
                <nav>
                    <Link to="/" end className={css.link}>
                        Home
                    </Link>

                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}

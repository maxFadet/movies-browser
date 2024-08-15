import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../common/Header";
import { TileContainer } from "../../MoviesListPage/MainContent/styled";
import Tile from "../../MoviesListPage/Tile";
import { toMovie } from "../../../routes";
import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import { fetchMovies } from './api';

function SearchMoviesResults() {
    const navigate = useNavigate();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    
    const query = new URLSearchParams(location.search).get('search') || '';

    useEffect(() => {
        if (query) {
            const getMovies = async () => {
                try {
                    const results = await fetchMovies(query);
                    setMovies(results);
                } catch (error) {
                    console.error(error);
                }
            };

            getMovies();
        }
    }, [query]);

    const handleMovieClick = (id) => {
        navigate(toMovie({ id }));
    };

    return (
        <Container>
            <Header title="Search results" />
            <TileContainer>
                {movies.map((film) => (
                    <Tile
                        key={film.id}
                        onClick={() => handleMovieClick(film.id)}
                        title={film.title}
                        year={film.release_date.split("-")[0]}
                        genres={film.genre_ids} 
                        rate={film.vote_average.toFixed(1)}
                        votes={film.vote_count.toLocaleString().replace(/,/g, ' ')}
                        poster={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    />
                ))}
            </TileContainer>
            <Pagination />
        </Container>
    );
}

export default SearchMoviesResults;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../common/Header";
import { TileContainer } from "../../MoviesListPage/styled";
import Tile from "../../MoviesListPage/Tile";
import { toMovie } from "../../../routes";
import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import axios from "axios";

function SearchMoviesResults() {
    const navigate = useNavigate();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    
    const query = new URLSearchParams(location.search).get('search') || '';

    useEffect(() => {
        if (query) {
            const fetchMovies = async () => {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/search/movie',
                    params: { query, include_adult: 'false', language: 'en-US', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDQ2MTI2MDcwMmJkZGJiOTg4MmUyZTRhMDJlZDA0ZSIsIm5iZiI6MTcyMzY2MTY0My45NDk0MjksInN1YiI6IjY2YWI4MjEwNGZlNDIxMzEwY2QyY2FlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nMPyeWUKdhaUTVPfltvi473upjSJlz1iKauLIeuXpQ'
                    }
                };

                try {
                    const response = await axios.request(options);
                    setMovies(response.data.results);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchMovies();
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
                        genres={film.genre_ids} // Assuming genre_ids are available
                        rate={film.vote_average}
                        votes={film.vote_count}
                        poster={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    />
                ))}
            </TileContainer>
            <Pagination />
        </Container>
    );
}

export default SearchMoviesResults;





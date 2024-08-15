export const toMoviesList = () => "/movies";
export const toActorsList = () => "/people";

export const toSearchMoviesResults = () => "/search-movies-results";
export const toSearchPeopleResults = () => "/search-people-results";

export const toMovie = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPerson = ({ id } = { id: ":id" }) => `/people/${id}`;
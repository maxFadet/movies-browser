// import axios from "axios";
// import { useEffect, useState } from "react"

// export const useFetchMovieGenresApi = () => {
//     const [movieGenres, setMovieGenres] = useState({});

//     useEffect(() => {
//         setTimeout(async () => {
//             const response = await axios.get("movieGenres.json");
//             setMovieGenres({
//                 fechedGenresList: response.data.genres,
//             })
//         }, 1000);
//     }, []);

//     const { fechedGenresList } = movieGenres;
//     return {
//         fechedGenresList,
//     };
// };
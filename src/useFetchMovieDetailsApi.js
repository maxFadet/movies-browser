// import axios from "axios";
// import { useEffect, useState } from "react"

// export const useFetchMovieDetailsApi = () => {
//     const [movieDetails, setMovieDetails] = useState({});

//     useEffect(() => {
//         setTimeout(async () => {
//             const response = await axios.get("movieDetailsData.json");

//             setMovieDetails({
//                 overview: response.data.overview,
//                 poster: response.data.poster_path,
//                 title: response.data.title,
//                 releaseDate: response.data.release_date,
//                 voutesCount: response.data.vote_count,
//                 votesAverage: response.data.vote_average,
//                 genres: response.data.genres,
//             });
//         }, 1000);
//     }, []);

//     const {
//         overview,
//         poster,
//         title,
//         releaseDate,
//         voutesCount,
//         votesAverage,
//         movieGenresIds
//     } = movieDetails;

//     return {
//         overview,
//         poster,
//         title,
//         releaseDate,
//         voutesCount,
//         votesAverage,
//         movieGenresIds,
//     };
// };
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from '../../../common/constants/config';

export const usePopularActors = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesActor, setTotalPagesActor] = useState(1);
    const [popularActor, setPopularActor] = useState({
        status: "",
        data: [],
    });

    const url = `${BASE_URL}/person/popular?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchTotalPagesActor = async () => {
            setPopularActor({
                status: "loading",
                data: [],
            });

            try {
                const response = await axios.get(`${url}&page=1`);
                if (response.data && response.data.total_pages) {
                    setTotalPagesActor(Math.min(response.data.total_pages, 500));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchTotalPagesActor();

        const fetchPopularActor = async () => {
            try {
                const response = await axios.get(`${url}&page=${currentPage}`);
                setPopularActor({
                    status: "success",
                    data: response.data.results,
                });
            } catch (error) {
                setPopularActor({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(fetchPopularActor, 500);
    }, [url, currentPage]);

    return { popularActor, totalPagesActor };
};
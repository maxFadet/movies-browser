import axios from "axios";

export const getResponse = async (url) => {
    try {
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};
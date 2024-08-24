import { BASE_IMAGE_URL } from "../constants/config/BASE_IMAGE_URL";

export const getImageUrl = (imagePath, width) => `${BASE_IMAGE_URL}${width}${imagePath}`;
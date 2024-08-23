import { BASE_IMAGE_URL } from "../config/BASE_IMAGE_URL";

export const getImageUrl = (imagePath, width) => `${BASE_IMAGE_URL}${width}${imagePath}`;
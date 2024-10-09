import axios from "axios";
import { Image } from "../../types";
const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "JzlsQk_gzbANiChIyz6tvmJbMeWXA-RJupEHhoRT3jw";

interface ApiResponse {
  results: Image[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(API_URL, {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch images. Please try again later.");
  }
};

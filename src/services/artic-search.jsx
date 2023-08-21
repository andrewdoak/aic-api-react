// Services are functions that help the back end to run.
// We're using axios instead of 'fetch' to get our data
import axios from "axios";

// Art Institute API Base Search
const baseURL = "https://api.artic.edu/api/v1/artworks";

const fetchArtworks = async (search) => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        q: search,
        fields:
          "id,title,artist_title,date_display,medium_description,description,image_id",
        "filter[is_public_domain]": true
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
};

export default fetchArtworks;
/*  
const API_BASE_URL = "https://api.artic.edu/api/v1/artworks/search?q=";
const publicDomain_URL = "&query[term][is_public_domain]=true";
// const IMAGE_URL = "";

// Function to fetch images from the Art Institute API using Axios
export const GetArtworks = async (searchText) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${searchText}${publicDomain_URL}`
    );

    // Return the array of images
    return response.data.data;
  } catch (error) {
    console.error("Error finding images:", error);
    throw new Error("Unable to fetch images");
  }
};

*/

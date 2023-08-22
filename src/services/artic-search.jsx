// Services are functions that help the back end to run.
// We're using axios instead of 'fetch' to get our data
import axios from "axios";

// Art Institute API Base Search
const API_BASE_URL = 'https://api.artic.edu/api/v1/artworks';  
  
export const searchArtworks = async (searchTerm) => {  
  try {  
    const response = await axios.get(`${API_BASE_URL}?q=${searchTerm}&limit=10&fields=id,title,artist_title,date_display,medium,description_text,image_id&is_public_domain=true`);  
    return response.data.data;  
  } catch (error) {  
    console.error('Error searching artworks:', error);  
    return [];  
  }  
};  

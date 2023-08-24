import { useState, useEffect } from "react";  
import axios from "axios";  
import ArtCard from "./components/ArtCard";
import SearchBar from "./components/SearchBar"  
  
// AIC API DOCS  
// https://api.artic.edu/docs/  
  
export default function App() {  
  // Create state
  const [data, setData] = useState([]);  
  const [searchTerm, setSearchTerm] = useState(""); 
  
  
  useEffect(() => {  
    // URL Scheme variables: use in THIS ORDER  
    const API_BASE_URL = "https://api.artic.edu/api/v1/artworks";  
    const searchPrefix = "/search?q=";  
    // const searchTerm = "Mark Rothko"; // Temp usage, comment out with search form  
    const paginate = "?page=1"; // 1 shows the first page of results  
    const limitResults = "&limit=15"; // 10 results in the search  
  
    axios  
      .get(`${API_BASE_URL}${searchPrefix}${searchTerm}${paginate}${limitResults}`)  
      .then((response) => setData(response.data.data));  
  }, [searchTerm]);  

  
  
  if (data) {  
    return (  
      <div>  
        <SearchBar artSearch={setSearchTerm} searchTerm={searchTerm} setData={setData}/>
        <h1>Art Cards</h1>  
        <div className="card-container">  
          {data.map((artwork) => (  
            <ArtCard key={artwork.id} artwork={artwork} />  
          ))}  
        </div>  
        {/* CLEAR SEARCH: MOVED TO SEARCHBAR COMPONENT */}
        {/* <button onClick={() => setData([])}>Reset</button>   */}
      </div>  
    );  
  } else {  
    return <div>Loading...</div>;  
  }  
}

/* 
<img src={imageUrl} alt={artwork.title} className="art-image" />
{artwork.artist_name}
{artwork.year_created}
{artwork.medium}
{artwork.description_text}
*/

// TESTING STATE/VIEWS/AXIOS
// `https://api.github.com/users`